import browser from 'webextension-polyfill';

export interface WordReplacementRule {
  id: string;
  pattern: string;
  isRegex: boolean;
  replacement: string;
  enabled: boolean;
}

export interface DomainReaderProfile {
  domain: string;
  titleSelector: string;
  contentSelector: string;
  nextSelector: string;
  replacements?: WordReplacementRule[];
}

export interface ReaderAutomationSettings {
  nextNavigationDelayMs: number;
  nextReadStartDelayMs: number;
}

const DOMAIN_READER_PROFILES_KEY = 'domainReaderProfiles';
const READER_AUTOMATION_SETTINGS_KEY = 'readerAutomationSettings';

export const DEFAULT_AUTOMATION_SETTINGS: ReaderAutomationSettings = {
  nextNavigationDelayMs: 1000,
  nextReadStartDelayMs: 1000,
};

export const DEFAULT_DOMAIN_READER_PROFILES: DomainReaderProfile[] = [
  {
    domain: 'allnovel.org',
    titleSelector: '.chapter-title .chapter-text',
    contentSelector: '#chapter-content',
    nextSelector: '#next_chap',
  },
];

function toDelayMs(value: unknown, fallback: number): number {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return fallback;
  }

  const rounded = Math.round(value);
  return rounded < 0 ? 0 : rounded;
}

export function normalizeDomainInput(input: string): string {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) {
    return '';
  }

  const withProtocol = /^https?:\/\//.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const hostname = new URL(withProtocol).hostname.toLowerCase();
    return normalizeHostname(hostname);
  } catch {
    return '';
  }
}

export function normalizeHostname(hostname: string): string {
  return hostname
    .trim()
    .toLowerCase()
    .replace(/^www\./, '')
    .replace(/\.+$/, '');
}

export function sanitizeDomainReaderProfile(profile: DomainReaderProfile): DomainReaderProfile {
  return {
    domain: normalizeDomainInput(profile.domain),
    titleSelector: profile.titleSelector.trim(),
    contentSelector: profile.contentSelector.trim(),
    nextSelector: profile.nextSelector.trim(),
    ...(profile.replacements ? { replacements: profile.replacements } : {}),
  };
}

export function isValidDomainReaderProfile(profile: DomainReaderProfile): boolean {
  return Boolean(
    profile.domain
    && profile.titleSelector
    && profile.contentSelector
    && profile.nextSelector
  );
}

export async function ensureDefaultReaderProfiles(): Promise<DomainReaderProfile[]> {
  const result = await browser.storage.sync.get(DOMAIN_READER_PROFILES_KEY);
  const existing = result[DOMAIN_READER_PROFILES_KEY] as DomainReaderProfile[] | undefined;

  if (Array.isArray(existing)) {
    return existing
      .map(sanitizeDomainReaderProfile)
      .filter(isValidDomainReaderProfile);
  }

  await browser.storage.sync.set({
    [DOMAIN_READER_PROFILES_KEY]: DEFAULT_DOMAIN_READER_PROFILES,
  });

  return DEFAULT_DOMAIN_READER_PROFILES;
}

export async function getDomainReaderProfiles(): Promise<DomainReaderProfile[]> {
  const profiles = await ensureDefaultReaderProfiles();
  return profiles
    .map(sanitizeDomainReaderProfile)
    .filter(isValidDomainReaderProfile);
}

export async function saveDomainReaderProfiles(profiles: DomainReaderProfile[]): Promise<void> {
  const cleanedProfiles = profiles
    .map(sanitizeDomainReaderProfile)
    .filter(isValidDomainReaderProfile);

  await browser.storage.sync.set({
    [DOMAIN_READER_PROFILES_KEY]: cleanedProfiles,
  });
}

export async function getReaderAutomationSettings(): Promise<ReaderAutomationSettings> {
  const result = await browser.storage.sync.get(READER_AUTOMATION_SETTINGS_KEY);
  const stored = result[READER_AUTOMATION_SETTINGS_KEY] as Partial<ReaderAutomationSettings> | undefined;

  if (!stored || typeof stored !== 'object') {
    return DEFAULT_AUTOMATION_SETTINGS;
  }

  return {
    nextNavigationDelayMs: toDelayMs(stored.nextNavigationDelayMs, DEFAULT_AUTOMATION_SETTINGS.nextNavigationDelayMs),
    nextReadStartDelayMs: toDelayMs(stored.nextReadStartDelayMs, DEFAULT_AUTOMATION_SETTINGS.nextReadStartDelayMs),
  };
}

export async function saveReaderAutomationSettings(settings: ReaderAutomationSettings): Promise<void> {
  const normalizedSettings: ReaderAutomationSettings = {
    nextNavigationDelayMs: toDelayMs(settings.nextNavigationDelayMs, DEFAULT_AUTOMATION_SETTINGS.nextNavigationDelayMs),
    nextReadStartDelayMs: toDelayMs(settings.nextReadStartDelayMs, DEFAULT_AUTOMATION_SETTINGS.nextReadStartDelayMs),
  };

  await browser.storage.sync.set({
    [READER_AUTOMATION_SETTINGS_KEY]: normalizedSettings,
  });
}

export function getMatchingDomainProfile(
  hostname: string,
  profiles: DomainReaderProfile[],
): DomainReaderProfile | null {
  const normalizedHostname = normalizeHostname(hostname);
  if (!normalizedHostname) {
    return null;
  }

  const sortedProfiles = [...profiles]
    .map(sanitizeDomainReaderProfile)
    .filter(isValidDomainReaderProfile)
    .sort((a, b) => b.domain.length - a.domain.length);

  for (const profile of sortedProfiles) {
    if (
      normalizedHostname === profile.domain
      || normalizedHostname.endsWith(`.${profile.domain}`)
    ) {
      return profile;
    }
  }

  return null;
}
