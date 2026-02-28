import { DomainReaderProfile } from './domainReaderProfiles';

export interface DomainExtractionResult {
  speechText: string;
  titleText: string;
  contentText: string;
  paragraphTexts: string[];
  startParagraphIndex: number;
  nextChapterUrl: string | null;
}

interface ExtractDomainReaderContentOptions {
  startFromViewportParagraph?: boolean;
}

interface ParagraphEntry {
  element: Element;
  text: string;
}

function normalizeText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function getElementText(element: Element | null): string {
  if (!element) {
    return '';
  }

  if ('innerText' in element && typeof element.innerText === 'string') {
    return normalizeText(element.innerText);
  }

  return normalizeText(element.textContent || '');
}

function trySelect(selector: string): Element | null {
  try {
    return document.querySelector(selector);
  } catch {
    return null;
  }
}

function resolveNextChapterUrl(nextElement: Element | null): string | null {
  if (!nextElement) {
    return null;
  }

  const disabled = nextElement.hasAttribute('disabled')
    || nextElement.getAttribute('aria-disabled') === 'true'
    || nextElement.classList.contains('disabled');

  if (disabled) {
    return null;
  }

  const href = nextElement.getAttribute('href');
  if (!href) {
    return null;
  }

  try {
    const url = new URL(href, window.location.href);
    return url.toString();
  } catch {
    return null;
  }
}

function isElementFullyVisibleInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= viewportHeight
    && rect.right <= viewportWidth
    && rect.height > 0
    && rect.width > 0
  );
}

function getReadableParagraphEntries(contentElement: Element): ParagraphEntry[] {
  return Array.from(contentElement.querySelectorAll('p'))
    .map((paragraph) => ({
      element: paragraph,
      text: getElementText(paragraph),
    }))
    .filter((entry) => entry.text.length > 0);
}

function resolveParagraphData(
  contentElement: Element | null,
  startFromViewportParagraph: boolean,
): {
  contentText: string;
  speechContentText: string;
  paragraphTexts: string[];
  startParagraphIndex: number;
} {
  if (!contentElement) {
    return {
      contentText: '',
      speechContentText: '',
      paragraphTexts: [],
      startParagraphIndex: 0,
    };
  }

  const paragraphEntries = getReadableParagraphEntries(contentElement);
  if (paragraphEntries.length > 0) {
    const paragraphTexts = paragraphEntries.map((entry) => entry.text);
    const firstFullyVisibleIndex = startFromViewportParagraph
      ? paragraphEntries.findIndex((entry) => isElementFullyVisibleInViewport(entry.element))
      : 0;
    const startParagraphIndex = firstFullyVisibleIndex >= 0 ? firstFullyVisibleIndex : 0;

    return {
      contentText: paragraphTexts.join('\n\n'),
      speechContentText: paragraphTexts.slice(startParagraphIndex).join('\n\n'),
      paragraphTexts,
      startParagraphIndex,
    };
  }

  const fallbackText = getElementText(contentElement);
  if (!fallbackText) {
    return {
      contentText: '',
      speechContentText: '',
      paragraphTexts: [],
      startParagraphIndex: 0,
    };
  }

  return {
    contentText: fallbackText,
    speechContentText: fallbackText,
    paragraphTexts: [fallbackText],
    startParagraphIndex: 0,
  };
}

export function extractDomainReaderContent(
  profile: DomainReaderProfile,
  options: ExtractDomainReaderContentOptions = {},
): DomainExtractionResult | null {
  const titleElement = trySelect(profile.titleSelector)
    || trySelect('.chapter-title');
  const contentElement = trySelect(profile.contentSelector);
  const nextElement = trySelect(profile.nextSelector);

  const titleText = getElementText(titleElement);
  const paragraphData = resolveParagraphData(contentElement, options.startFromViewportParagraph ?? false);
  if (!paragraphData.speechContentText) {
    return null;
  }

  const speechText = !options.startFromViewportParagraph && titleText
    ? `${titleText}\n\n${paragraphData.speechContentText}`
    : paragraphData.speechContentText;

  return {
    speechText,
    titleText,
    contentText: paragraphData.contentText,
    paragraphTexts: paragraphData.paragraphTexts,
    startParagraphIndex: paragraphData.startParagraphIndex,
    nextChapterUrl: resolveNextChapterUrl(nextElement),
  };
}
