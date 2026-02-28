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

export function extractDomainReaderContent(profile: DomainReaderProfile): DomainExtractionResult | null {
  const titleElement = trySelect(profile.titleSelector)
    || trySelect('.chapter-title');
  const contentElement = trySelect(profile.contentSelector);
  const nextElement = trySelect(profile.nextSelector);

  const titleText = getElementText(titleElement);
  const contentText = getElementText(contentElement);

  if (!contentText) {
    return null;
  }

  const speechText = titleText
    ? `${titleText}\n\n${contentText}`
    : contentText;

  return {
    speechText,
    titleText,
    contentText,
    nextChapterUrl: resolveNextChapterUrl(nextElement),
  };
}
