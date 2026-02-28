import browser from 'webextension-polyfill';
import { BrowserCommunicate, BrowserCommunicateOptions } from './utils/browserCommunicate';
import './content-styles.css';
import {
  createControlPanel,
  updatePanelContent,
} from './components/controlPanel';
import { circlePause, circlePlay } from './lib/svgs';
import { isFirefox } from './utils/browserDetection';
import { extractTextFromSelection, extractTextFromSelectionSimple } from './utils/textExtraction';
import {
  DEFAULT_AUTOMATION_SETTINGS,
  DomainReaderProfile,
  ReaderAutomationSettings,
  getDomainReaderProfiles,
  getMatchingDomainProfile,
  getReaderAutomationSettings,
} from './utils/domainReaderProfiles';
import { extractDomainReaderContent } from './utils/domainExtraction';

const AUTO_READ_SESSION_KEY = 'etts:auto-read-pending';
const MAX_PENDING_AUTO_READ_AGE_MS = 30 * 60 * 1000;

let audioElement: HTMLAudioElement | null = null;
let controlPanel: HTMLElement | null = null;
let currentTTSDeactivate: (() => void) | null = null;

let isAutonomousModeEnabled = false;
let currentNextChapterUrl: string | null = null;
let currentAutomationSettings: ReaderAutomationSettings = DEFAULT_AUTOMATION_SETTINGS;
let pendingNavigationTimeoutId: number | null = null;
let pendingAutoReadStartTimeoutId: number | null = null;
let isAutonomousNavigationInProgress = false;
let paragraphNavigationState: ParagraphNavigationState | null = null;

interface ParagraphNavigationConfig {
  paragraphTexts: string[];
  startParagraphIndex: number;
}

interface ParagraphPlaybackOptions {
  autonomousMode: boolean;
  nextChapterUrl: string | null;
  automationSettings?: ReaderAutomationSettings;
}

interface ParagraphNavigationState {
  paragraphs: string[];
  currentParagraphIndex: number;
  playbackOptions: ParagraphPlaybackOptions;
}

interface InitTTSOptions {
  autonomousMode: boolean;
  nextChapterUrl?: string | null;
  automationSettings?: ReaderAutomationSettings;
  paragraphNavigation?: ParagraphNavigationConfig;
}

interface PendingAutoReadState {
  delayMs: number;
  createdAt: number;
}

interface ExtensionMessage {
  action: string;
  text?: string;
}

(window as any).togglePause = togglePause;
(window as any).stopPlayback = stopPlayback;
(window as any).previousParagraph = previousParagraph;
(window as any).nextParagraph = nextParagraph;

function clearPendingTimeouts(): void {
  if (pendingNavigationTimeoutId !== null) {
    window.clearTimeout(pendingNavigationTimeoutId);
    pendingNavigationTimeoutId = null;
  }

  if (pendingAutoReadStartTimeoutId !== null) {
    window.clearTimeout(pendingAutoReadStartTimeoutId);
    pendingAutoReadStartTimeoutId = null;
  }
}

function setPendingAutoReadState(delayMs: number): void {
  const state: PendingAutoReadState = {
    delayMs: Math.max(0, Math.round(delayMs)),
    createdAt: Date.now(),
  };

  sessionStorage.setItem(AUTO_READ_SESSION_KEY, JSON.stringify(state));
}

function consumePendingAutoReadState(): number | null {
  const rawState = sessionStorage.getItem(AUTO_READ_SESSION_KEY);
  if (!rawState) {
    return null;
  }

  sessionStorage.removeItem(AUTO_READ_SESSION_KEY);

  try {
    const parsed = JSON.parse(rawState) as PendingAutoReadState;
    if (typeof parsed.delayMs !== 'number' || typeof parsed.createdAt !== 'number') {
      return null;
    }

    if (Date.now() - parsed.createdAt > MAX_PENDING_AUTO_READ_AGE_MS) {
      return null;
    }

    return Math.max(0, Math.round(parsed.delayMs));
  } catch {
    return null;
  }
}

function clearPendingAutoReadState(): void {
  sessionStorage.removeItem(AUTO_READ_SESSION_KEY);
}

function disableAutonomousMode(): void {
  isAutonomousModeEnabled = false;
  currentNextChapterUrl = null;
  currentAutomationSettings = DEFAULT_AUTOMATION_SETTINGS;
  clearPendingTimeouts();
  clearPendingAutoReadState();
  isAutonomousNavigationInProgress = false;
}

function configureAutonomousMode(options: InitTTSOptions): void {
  if (!options.autonomousMode) {
    disableAutonomousMode();
    return;
  }

  isAutonomousModeEnabled = true;
  currentNextChapterUrl = options.nextChapterUrl ?? null;
  currentAutomationSettings = options.automationSettings ?? DEFAULT_AUTOMATION_SETTINGS;
  clearPendingTimeouts();
}

function showProfileWarning(message: string): void {
  const warningId = 'etts-profile-warning';
  const existing = document.getElementById(warningId);
  if (existing) {
    existing.textContent = message;
    return;
  }

  const warning = document.createElement('div');
  warning.id = warningId;
  warning.textContent = message;
  warning.style.position = 'fixed';
  warning.style.top = '20px';
  warning.style.right = '20px';
  warning.style.zIndex = '10001';
  warning.style.padding = '10px 14px';
  warning.style.borderRadius = '8px';
  warning.style.background = '#b91c1c';
  warning.style.color = '#ffffff';
  warning.style.fontSize = '13px';
  warning.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';

  document.body.appendChild(warning);

  window.setTimeout(() => {
    if (warning.parentElement) {
      warning.parentElement.removeChild(warning);
    }
  }, 4000);
}

async function getCurrentSiteProfileOrWarn(): Promise<DomainReaderProfile | null> {
  const profiles = await getDomainReaderProfiles();
  const profile = getMatchingDomainProfile(window.location.hostname, profiles);
  if (!profile) {
    showProfileWarning('No reader profile configured for this site. Configure selectors in extension options.');
    return null;
  }

  return profile;
}

function scheduleAutonomousNextChapterNavigation(): boolean {
  if (!isAutonomousModeEnabled || !currentNextChapterUrl) {
    return false;
  }

  setPendingAutoReadState(currentAutomationSettings.nextReadStartDelayMs);
  pendingNavigationTimeoutId = window.setTimeout(() => {
    pendingNavigationTimeoutId = null;
    isAutonomousNavigationInProgress = true;
    window.location.href = currentNextChapterUrl!;
  }, currentAutomationSettings.nextNavigationDelayMs);

  return true;
}

function splitTextIntoParagraphs(text: string): string[] {
  const normalized = text.replace(/\r\n/g, '\n').trim();
  if (!normalized) {
    return [];
  }

  const blockParagraphs = normalized
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0);
  if (blockParagraphs.length > 1) {
    return blockParagraphs;
  }

  const lineParagraphs = normalized
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0);
  if (lineParagraphs.length > 1) {
    return lineParagraphs;
  }

  return [normalized];
}

function updateParagraphNavigationButtons(): void {
  if (!controlPanel) {
    return;
  }

  const previousParagraphButton = controlPanel.querySelector('#tts-prev-paragraph') as HTMLButtonElement | null;
  const nextParagraphButton = controlPanel.querySelector('#tts-next-paragraph') as HTMLButtonElement | null;
  if (!previousParagraphButton || !nextParagraphButton) {
    return;
  }

  const canGoPrevious = Boolean(
    paragraphNavigationState && paragraphNavigationState.currentParagraphIndex > 0,
  );
  const canGoNext = Boolean(
    paragraphNavigationState
      && paragraphNavigationState.currentParagraphIndex < paragraphNavigationState.paragraphs.length - 1,
  );

  previousParagraphButton.disabled = !canGoPrevious;
  nextParagraphButton.disabled = !canGoNext;
}

function setParagraphNavigationState(text: string, options: InitTTSOptions): void {
  const providedParagraphs = (options.paragraphNavigation?.paragraphTexts || [])
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0);
  const paragraphs = providedParagraphs.length > 0
    ? providedParagraphs
    : splitTextIntoParagraphs(text);

  if (paragraphs.length === 0) {
    paragraphNavigationState = null;
    return;
  }

  const requestedStartIndex = Math.round(options.paragraphNavigation?.startParagraphIndex ?? 0);
  const startParagraphIndex = Math.min(
    Math.max(requestedStartIndex, 0),
    paragraphs.length - 1,
  );

  paragraphNavigationState = {
    paragraphs,
    currentParagraphIndex: startParagraphIndex,
    playbackOptions: {
      autonomousMode: options.autonomousMode,
      nextChapterUrl: options.nextChapterUrl ?? null,
      automationSettings: options.automationSettings,
    },
  };
}

async function moveParagraph(offset: number): Promise<void> {
  if (!paragraphNavigationState) {
    return;
  }

  const targetParagraphIndex = paragraphNavigationState.currentParagraphIndex + offset;
  if (
    targetParagraphIndex < 0
    || targetParagraphIndex >= paragraphNavigationState.paragraphs.length
  ) {
    return;
  }

  const remainingText = paragraphNavigationState.paragraphs
    .slice(targetParagraphIndex)
    .join('\n\n');
  if (!remainingText) {
    return;
  }

  await initTTS(remainingText, {
    autonomousMode: paragraphNavigationState.playbackOptions.autonomousMode,
    nextChapterUrl: paragraphNavigationState.playbackOptions.nextChapterUrl,
    automationSettings: paragraphNavigationState.playbackOptions.automationSettings,
    paragraphNavigation: {
      paragraphTexts: paragraphNavigationState.paragraphs,
      startParagraphIndex: targetParagraphIndex,
    },
  });
}

function previousParagraph(): void {
  void moveParagraph(-1).catch((error) => {
    console.error('Failed to move to previous paragraph:', error);
  });
}

function nextParagraph(): void {
  void moveParagraph(1).catch((error) => {
    console.error('Failed to move to next paragraph:', error);
  });
}

function updatePlayPauseButton(): void {
  const pauseButton = document.querySelector('#tts-pause');
  if (!pauseButton) {
    return;
  }

  const buttonText = audioElement && !audioElement.paused ? 'Pause' : 'Resume';
  pauseButton.innerHTML = `
      ${audioElement && !audioElement.paused ? circlePause : circlePlay}
      <span>
        ${buttonText}
      </span>
    `;
}

function removeControlPanel(): void {
  if (!controlPanel) {
    return;
  }

  const buttons = controlPanel.querySelectorAll('button');
  buttons.forEach((button: HTMLButtonElement) => {
    const newButton = button.cloneNode(true);
    button.parentNode?.replaceChild(newButton, button);
  });

  if (controlPanel.parentNode) {
    controlPanel.parentNode.removeChild(controlPanel);
  }

  controlPanel = null;
}

function cleanup(preserveAutonomousState = false): void {
  if (currentTTSDeactivate) {
    currentTTSDeactivate();
    currentTTSDeactivate = null;
  }

  paragraphNavigationState = null;
  if (!preserveAutonomousState) {
    disableAutonomousMode();
  }

  if (audioElement) {
    audioElement.onplay = null;
    audioElement.onpause = null;
    audioElement.onended = null;
    audioElement.onerror = null;
    audioElement.onloadstart = null;
    audioElement.oncanplay = null;

    try {
      navigator.mediaSession.setActionHandler('play', null);
      navigator.mediaSession.setActionHandler('pause', null);
      navigator.mediaSession.setActionHandler('stop', null);
      navigator.mediaSession.setActionHandler('previoustrack', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
    } catch {
      // Ignore unsupported mediaSession environments
    }

    const oldSrc = audioElement.src;
    audioElement.pause();
    audioElement.src = '';
    audioElement.load();

    if (oldSrc && oldSrc.startsWith('blob:')) {
      URL.revokeObjectURL(oldSrc);
    }
  }

  audioElement = null;
  removeControlPanel();
}

function togglePause(): void {
  if (!audioElement) {
    return;
  }

  if (audioElement.paused) {
    void audioElement.play();
  } else {
    disableAutonomousMode();
    audioElement.pause();
  }
}

function stopPlayback(): void {
  disableAutonomousMode();
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
  cleanup();
}

export async function initTTS(text: string, options: InitTTSOptions = { autonomousMode: false }): Promise<void> {
  if (currentTTSDeactivate) {
    currentTTSDeactivate();
  }

  cleanup();
  configureAutonomousMode(options);
  setParagraphNavigationState(text, options);

  try {
    const settings = await browser.storage.sync.get({
      voiceName: 'en-US-ChristopherNeural',
      customVoice: '',
      speed: 1.2,
    });

    controlPanel = await createControlPanel(true);

    const voiceName = (settings.customVoice as string) || (settings.voiceName as string);
    const speedPercent = Math.round(((settings.speed as number) - 1) * 100);
    const rateString = speedPercent >= 0 ? `+${speedPercent}%` : `${speedPercent}%`;

    const browserCommunicateOptions: BrowserCommunicateOptions = {
      voice: voiceName,
      rate: rateString,
      connectionTimeout: 10000,
    };

    const communicate = new BrowserCommunicate(text, browserCommunicateOptions);

    return new Promise((resolve, reject) => {
      const mediaSource = new MediaSource();
      let sourceBuffer: SourceBuffer;
      const chunks: Uint8Array[] = [];
      let isFirstChunk = true;
      let isActive = true;

      currentTTSDeactivate = () => {
        isActive = false;
      };

      if (!audioElement) {
        audioElement = new Audio();
        audioElement.muted = true;
        audioElement.src = URL.createObjectURL(mediaSource);

        navigator.mediaSession.setActionHandler('play', () => audioElement?.play());
        navigator.mediaSession.setActionHandler('pause', () => audioElement?.pause());
        navigator.mediaSession.setActionHandler('stop', () => stopPlayback());
        navigator.mediaSession.setActionHandler('previoustrack', () => previousParagraph());
        navigator.mediaSession.setActionHandler('nexttrack', () => nextParagraph());

        audioElement.onplay = () => {
          if (audioElement) {
            audioElement.muted = false;
          }
          updatePlayPauseButton();
        };

        audioElement.onpause = () => {
          updatePlayPauseButton();
        };

        audioElement.onended = () => {
          updatePlayPauseButton();

          const scheduled = scheduleAutonomousNextChapterNavigation();
          cleanup(scheduled);
        };

        audioElement.onerror = (error) => {
          console.error('Audio playback error:', error);
          cleanup();
        };
      }

      if (controlPanel) {
        updatePanelContent(controlPanel, false);
      }
        updateParagraphNavigationButtons();

      const appendNextChunk = () => {
        if (!isActive || !sourceBuffer || mediaSource.readyState !== 'open') {
          return;
        }

        if (chunks.length > 0 && !sourceBuffer.updating) {
          try {
            const chunk = chunks.shift();
            if (chunk) {
              const safeChunk = new Uint8Array(chunk.length);
              safeChunk.set(chunk);
              sourceBuffer.appendBuffer(safeChunk);

              if (isFirstChunk) {
                if (isFirefox()) {
                  setTimeout(() => {
                    audioElement?.play().catch((err) => {
                      console.warn('Firefox autoplay workaround failed:', err);
                    });
                  }, 0);
                } else {
                  audioElement?.play().catch((err) => {
                    console.warn('Audio playback failed:', err);
                  });
                }
                isFirstChunk = false;
              }
            }
          } catch (err) {
            console.error('appendNextChunk error:', err, 'chunk length:', chunks[0]?.length);
            chunks.shift();

            if (isActive) {
              setTimeout(appendNextChunk, 100);
            }
          }
        }
      };

      mediaSource.addEventListener('sourceopen', () => {
        try {
          const mimeType = isFirefox()
            ? 'audio/webm; codecs="opus"'
            : 'audio/mpeg';
          sourceBuffer = mediaSource.addSourceBuffer(mimeType);
          sourceBuffer.addEventListener('updateend', appendNextChunk);

          (async () => {
            try {
              let streamEnded = false;

              for await (const chunk of communicate.stream()) {
                if (!isActive) {
                  streamEnded = true;
                  return;
                }

                if (chunk.type === 'audio' && chunk.data) {
                  const cloned = new Uint8Array(chunk.data.byteLength);
                  cloned.set(chunk.data);
                  chunks.push(cloned);
                  appendNextChunk();
                }
              }

              streamEnded = true;

              const checkAndEndStream = () => {
                if (!isActive) {
                  return;
                }

                if (streamEnded && chunks.length === 0 && !sourceBuffer.updating) {
                  try {
                    if (mediaSource.readyState === 'open') {
                      mediaSource.endOfStream();
                    }
                    resolve(void 0);
                  } catch {
                    resolve(void 0);
                  }
                } else {
                  setTimeout(checkAndEndStream, 100);
                }
              };

              checkAndEndStream();
            } catch (error) {
              console.error('TTS streaming error:', error);
              reject(error);
            }
          })();
        } catch (error) {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('TTS Error:', error);
    cleanup();
    throw error;
  }
}

interface StartConfiguredPageReadOptions {
  startFromViewportParagraph?: boolean;
}

async function startConfiguredPageRead(
  options: StartConfiguredPageReadOptions = {},
): Promise<void> {
  const profile = await getCurrentSiteProfileOrWarn();
  if (!profile) {
    return;
  }

  const extraction = extractDomainReaderContent(profile, {
    startFromViewportParagraph: options.startFromViewportParagraph ?? false,
  });
  if (!extraction) {
    showProfileWarning('Configured selectors did not find readable chapter content on this page.');
    return;
  }

  const automationSettings = await getReaderAutomationSettings();
  await initTTS(extraction.speechText, {
    autonomousMode: true,
    nextChapterUrl: extraction.nextChapterUrl,
    automationSettings,
    paragraphNavigation: {
      paragraphTexts: extraction.paragraphTexts,
      startParagraphIndex: extraction.startParagraphIndex,
    },
  });
}

async function startSelectedTextRead(selectedText: string): Promise<void> {
  const profile = await getCurrentSiteProfileOrWarn();
  if (!profile) {
    return;
  }

  await initTTS(selectedText, { autonomousMode: false });
}

async function startReadFromHere(selectedText: string): Promise<void> {
  const profile = await getCurrentSiteProfileOrWarn();
  if (!profile) {
    return;
  }

  let textToRead = '';

  try {
    textToRead = extractTextFromSelection(selectedText);
    if (!textToRead || textToRead.trim().length === 0) {
      textToRead = extractTextFromSelectionSimple(selectedText);
    }
  } catch (error) {
    console.error('Error extracting text from selection:', error);
    textToRead = selectedText;
  }

  if (!textToRead || !textToRead.trim()) {
    showProfileWarning('No readable text found from the selected position.');
    return;
  }

  await initTTS(textToRead, { autonomousMode: false });
}

async function maybeStartPendingAutoRead(): Promise<void> {
  const pendingDelayMs = consumePendingAutoReadState();
  if (pendingDelayMs === null) {
    return;
  }

  const profile = await getCurrentSiteProfileOrWarn();
  if (!profile) {
    return;
  }

  pendingAutoReadStartTimeoutId = window.setTimeout(() => {
    pendingAutoReadStartTimeoutId = null;
    void startConfiguredPageRead().catch((error) => {
      console.error('Auto-start read failed:', error);
    });
  }, pendingDelayMs);
}

async function handleIncomingMessage(request: ExtensionMessage): Promise<void> {
  if (request.action === 'stopPlayback') {
    stopPlayback();
    return;
  }

  if (request.action === 'togglePlayback') {
    togglePause();
    return;
  }

  if (request.action === 'previousParagraph') {
    previousParagraph();
    return;
  }

  if (request.action === 'nextParagraph') {
    nextParagraph();
    return;
  }

  if (request.action === 'readPage') {
    await startConfiguredPageRead({ startFromViewportParagraph: true });
    return;
  }

  if (request.action === 'readText' && request.text) {
    await startSelectedTextRead(request.text);
    return;
  }

  if (request.action === 'readFromHere' && request.text) {
    await startReadFromHere(request.text);
  }
}

browser.runtime.onMessage.addListener((request: unknown) => {
  const message = request as ExtensionMessage;
  void handleIncomingMessage(message).catch((error) => {
    console.error('Message handling error:', error);
  });
});

window.addEventListener('message', (event) => {
  if (event.source !== window) {
    return;
  }

  const { action, text } = event.data || {};

  if (action === 'triggerReadPage') {
    void startConfiguredPageRead({ startFromViewportParagraph: true }).catch((error) => {
      console.error('triggerReadPage error:', error);
    });
  }

  if (action === 'triggerPreviousParagraph') {
    previousParagraph();
  }

  if (action === 'triggerNextParagraph') {
    nextParagraph();
  }

  if (action === 'triggerTTS' && typeof text === 'string') {
    void startSelectedTextRead(text).catch((error) => {
      console.error('triggerTTS error:', error);
    });
  }
});

window.addEventListener('beforeunload', () => {
  clearPendingTimeouts();

  if (isAutonomousNavigationInProgress) {
    cleanup(true);
    return;
  }

  cleanup();
});

void maybeStartPendingAutoRead().catch((error) => {
  console.error('Auto-read initialization failed:', error);
});