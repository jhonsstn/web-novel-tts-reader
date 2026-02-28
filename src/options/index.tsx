import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import browser from 'webextension-polyfill';
import './styles.css';
import {
  DEFAULT_AUTOMATION_SETTINGS,
  DomainReaderProfile,
  getDomainReaderProfiles,
  getReaderAutomationSettings,
  normalizeDomainInput,
  saveDomainReaderProfiles,
  saveReaderAutomationSettings,
} from '../utils/domainReaderProfiles';

type SaveState = {
  type: 'idle' | 'success' | 'error';
  message: string;
};

const EMPTY_PROFILE: DomainReaderProfile = {
  domain: '',
  titleSelector: '',
  contentSelector: '',
  nextSelector: '',
};

function isValidSelectorSyntax(selector: string): boolean {
  try {
    document.createDocumentFragment().querySelector(selector);
    return true;
  } catch {
    return false;
  }
}

function validateProfiles(profiles: DomainReaderProfile[]): string | null {

  const seenDomains = new Set<string>();

  for (let i = 0; i < profiles.length; i += 1) {
    const profile = profiles[i];
    const profileIndex = i + 1;

    if (!profile.domain.trim()) {
      return `Profile ${profileIndex}: domain is required.`;
    }

    const normalizedDomain = normalizeDomainInput(profile.domain);
    if (!normalizedDomain) {
      return `Profile ${profileIndex}: domain is invalid.`;
    }

    if (seenDomains.has(normalizedDomain)) {
      return `Duplicate domain profile: ${normalizedDomain}`;
    }

    seenDomains.add(normalizedDomain);

    if (!profile.titleSelector.trim() || !profile.contentSelector.trim() || !profile.nextSelector.trim()) {
      return `Profile ${profileIndex}: all selectors are required.`;
    }

    if (!isValidSelectorSyntax(profile.titleSelector.trim())) {
      return `Profile ${profileIndex}: title selector has invalid CSS syntax.`;
    }

    if (!isValidSelectorSyntax(profile.contentSelector.trim())) {
      return `Profile ${profileIndex}: content selector has invalid CSS syntax.`;
    }

    if (!isValidSelectorSyntax(profile.nextSelector.trim())) {
      return `Profile ${profileIndex}: next selector has invalid CSS syntax.`;
    }
  }

  return null;
}

function OptionsPage() {
  const [profiles, setProfiles] = useState<DomainReaderProfile[]>([]);
  const [navigationDelaySeconds, setNavigationDelaySeconds] = useState('1');
  const [readStartDelaySeconds, setReadStartDelaySeconds] = useState('1');
  const [saveState, setSaveState] = useState<SaveState>({ type: 'idle', message: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [{ darkMode }, storedProfiles, settings] = await Promise.all([
        browser.storage.sync.get({ darkMode: false }),
        getDomainReaderProfiles(),
        getReaderAutomationSettings(),
      ]);

      document.documentElement.classList.toggle('dark', Boolean(darkMode));

      setProfiles(storedProfiles);
      setNavigationDelaySeconds(String(settings.nextNavigationDelayMs / 1000));
      setReadStartDelaySeconds(String(settings.nextReadStartDelayMs / 1000));
      setIsLoading(false);
    })().catch((error) => {
      console.error('Failed to load options:', error);
      setSaveState({
        type: 'error',
        message: 'Failed to load configuration data.',
      });
      setIsLoading(false);
    });
  }, []);

  const hasProfiles = useMemo(() => profiles.length > 0, [profiles]);

  const updateProfileField = (
    index: number,
    key: keyof DomainReaderProfile,
    value: string,
  ) => {
    setProfiles((current) => current.map((profile, profileIndex) => {
      if (profileIndex !== index) {
        return profile;
      }

      return {
        ...profile,
        [key]: value,
      };
    }));
  };

  const addProfile = () => {
    setProfiles((current) => [...current, { ...EMPTY_PROFILE }]);
  };

  const removeProfile = (index: number) => {
    setProfiles((current) => current.filter((_, profileIndex) => profileIndex !== index));
  };

  const saveProfiles = async () => {
    const validationError = validateProfiles(profiles);
    if (validationError) {
      setSaveState({ type: 'error', message: validationError });
      return;
    }

    try {
      await saveDomainReaderProfiles(profiles);
      const refreshedProfiles = await getDomainReaderProfiles();
      setProfiles(refreshedProfiles);
      setSaveState({ type: 'success', message: 'Domain profiles saved.' });
    } catch (error) {
      console.error('Failed to save profiles:', error);
      setSaveState({ type: 'error', message: 'Failed to save domain profiles.' });
    }
  };

  const saveAutomationSettings = async () => {
    const parsedNavigationDelay = Number(navigationDelaySeconds);
    const parsedReadStartDelay = Number(readStartDelaySeconds);

    if (Number.isNaN(parsedNavigationDelay) || parsedNavigationDelay < 0) {
      setSaveState({ type: 'error', message: 'Navigation delay must be a non-negative number.' });
      return;
    }

    if (Number.isNaN(parsedReadStartDelay) || parsedReadStartDelay < 0) {
      setSaveState({ type: 'error', message: 'Read-start delay must be a non-negative number.' });
      return;
    }

    try {
      await saveReaderAutomationSettings({
        nextNavigationDelayMs: Math.round(parsedNavigationDelay * 1000),
        nextReadStartDelayMs: Math.round(parsedReadStartDelay * 1000),
      });

      setSaveState({ type: 'success', message: 'Automation delays saved.' });
    } catch (error) {
      console.error('Failed to save automation settings:', error);
      setSaveState({ type: 'error', message: 'Failed to save automation delay settings.' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen p-6 text-slate-900 dark:text-slate-100">
        Loading configuration...
      </div>
    );
  }

  return (
    <main className="min-h-screen p-6 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-4xl space-y-6">
        <header>
          <h1 className="text-2xl font-bold">Web Novel Reader Configuration</h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Reading is restricted to domains configured here. Matching applies to each base domain and its subdomains.
          </p>
        </header>

        <section className="rounded border border-slate-300 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-lg font-semibold">Autonomous Progression Delays</h2>
          <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">
            Default: {DEFAULT_AUTOMATION_SETTINGS.nextNavigationDelayMs / 1000}s navigation delay and {DEFAULT_AUTOMATION_SETTINGS.nextReadStartDelayMs / 1000}s read-start delay.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Delay before navigating to next chapter (seconds)
              <input
                type="number"
                min="0"
                step="0.1"
                value={navigationDelaySeconds}
                onChange={(event) => setNavigationDelaySeconds(event.target.value)}
                className="mt-1 w-full rounded border border-slate-300 p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>

            <label className="text-sm font-medium">
              Delay before starting reading on next page (seconds)
              <input
                type="number"
                min="0"
                step="0.1"
                value={readStartDelaySeconds}
                onChange={(event) => setReadStartDelaySeconds(event.target.value)}
                className="mt-1 w-full rounded border border-slate-300 p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>
          </div>

          <button
            onClick={saveAutomationSettings}
            className="mt-4 rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Save Delays
          </button>
        </section>

        <section className="rounded border border-slate-300 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Domain Profiles</h2>
            <button
              onClick={addProfile}
              className="rounded bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Add Profile
            </button>
          </div>

          {!hasProfiles && (
            <p className="mt-4 text-sm text-amber-600 dark:text-amber-300">
              No profiles configured. Autonomous reading will not run until at least one profile is saved.
            </p>
          )}

          <div className="mt-4 space-y-4">
            {profiles.map((profile, index) => (
              <article key={`${profile.domain}-${index}`} className="rounded border border-slate-200 p-4 dark:border-slate-700">
                <div className="grid gap-3">
                  <label className="text-sm font-medium">
                    Domain
                    <input
                      type="text"
                      value={profile.domain}
                      onChange={(event) => updateProfileField(index, 'domain', event.target.value)}
                      placeholder="allnovel.org"
                      className="mt-1 w-full rounded border border-slate-300 p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </label>

                  <label className="text-sm font-medium">
                    Title selector
                    <input
                      type="text"
                      value={profile.titleSelector}
                      onChange={(event) => updateProfileField(index, 'titleSelector', event.target.value)}
                      placeholder=".chapter-title .chapter-text"
                      className="mt-1 w-full rounded border border-slate-300 p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </label>

                  <label className="text-sm font-medium">
                    Content selector
                    <input
                      type="text"
                      value={profile.contentSelector}
                      onChange={(event) => updateProfileField(index, 'contentSelector', event.target.value)}
                      placeholder="#chapter-content"
                      className="mt-1 w-full rounded border border-slate-300 p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </label>

                  <label className="text-sm font-medium">
                    Next chapter selector
                    <input
                      type="text"
                      value={profile.nextSelector}
                      onChange={(event) => updateProfileField(index, 'nextSelector', event.target.value)}
                      placeholder="#next_chap"
                      className="mt-1 w-full rounded border border-slate-300 p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </label>
                </div>

                <div className="mt-3">
                  <button
                    onClick={() => removeProfile(index)}
                    className="rounded bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-700"
                  >
                    Delete Profile
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={saveProfiles}
            className="mt-4 rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Save Profiles
          </button>
        </section>

        {saveState.type !== 'idle' && (
          <p
            className={`rounded border px-3 py-2 text-sm ${saveState.type === 'success'
              ? 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-100'
              : 'border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-700 dark:bg-rose-900/30 dark:text-rose-100'}`}
          >
            {saveState.message}
          </p>
        )}
      </div>
    </main>
  );
}

const rootNode = document.getElementById('root');
if (!rootNode) {
  throw new Error('Root node not found for options page.');
}

createRoot(rootNode).render(<OptionsPage />);
