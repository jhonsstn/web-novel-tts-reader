import { DomainReaderProfile } from './domainReaderProfiles';

export interface DomainExtractionResult {
  speechText: string;
  titleText: string;
  contentText: string;
  nextChapterUrl: string | null;
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

interface ExtractDomainReaderContentOptions {
  startFromViewportParagraph?: boolean;
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

function getViewportParagraphContentText(contentElement: Element): string {
  const readableParagraphs = Array.from(contentElement.querySelectorAll('p'))
    .map((paragraph) => ({
      paragraph,
      text: getElementText(paragraph),
    }))
    .filter((entry) => entry.text.length > 0);

  if (readableParagraphs.length === 0) {
    return '';
  }

  const firstFullyVisibleIndex = readableParagraphs.findIndex((entry) =>
    isElementFullyVisibleInViewport(entry.paragraph)
  );
  const startIndex = firstFullyVisibleIndex >= 0 ? firstFullyVisibleIndex : 0;

  return readableParagraphs
    .slice(startIndex)
    .map((entry) => entry.text)
    .join('\n\n');
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
  const contentText = contentElement
    ? (options.startFromViewportParagraph
      ? getViewportParagraphContentText(contentElement) || getElementText(contentElement)
      : getElementText(contentElement))
    : '';

  if (!contentText) {
    return null;
  }

  const speechText = !options.startFromViewportParagraph && titleText
    ? `${titleText}\n\n${contentText}`
    : contentText;

  return {
    speechText,
    titleText,
    contentText,
    nextChapterUrl: resolveNextChapterUrl(nextElement),
  };
}
