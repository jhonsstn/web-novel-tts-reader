import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createRoot } from 'react-dom/client';
import browser from 'webextension-polyfill';
import './styles.css';
import {
  DEFAULT_AUTOMATION_SETTINGS,
  DomainReaderProfile,
  WordReplacementRule,
  getDomainReaderProfiles,
  getReaderAutomationSettings,
  normalizeDomainInput,
  saveDomainReaderProfiles,
  saveReaderAutomationSettings,
} from '../utils/domainReaderProfiles';
import {
  applyReplacementRules,
  getGlobalReplacementRules,
  saveGlobalReplacementRules,
} from '../utils/wordReplacements';

type SaveState = {
  type: 'idle' | 'success' | 'error';
  message: string;
};

const EMPTY_PROFILE: DomainReaderProfile = {
  domain: '',
  titleSelector: '',
  contentSelector: '',
  nextSelector: '',
  replacements: [],
};

function createEmptyRule(): WordReplacementRule {
  return {
    id: crypto.randomUUID(),
    pattern: '',
    isRegex: false,
    replacement: '',
    enabled: true,
  };
}

function validateReplacementRules(rules: WordReplacementRule[]): string | null {
  for (let i = 0; i < rules.length; i += 1) {
    const rule = rules[i];
    if (!rule.pattern.trim()) {
      return `Rule ${i + 1}: pattern is required.`;
    }
    if (rule.isRegex) {
      try {
        new RegExp(rule.pattern);
      } catch {
        return `Rule ${i + 1}: invalid regex pattern.`;
      }
    }
  }
  return null;
}

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

    if (
      !profile.titleSelector.trim() ||
      !profile.contentSelector.trim() ||
      !profile.nextSelector.trim()
    ) {
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
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);
  const [navigationDelaySeconds, setNavigationDelaySeconds] = useState('1');
  const [readStartDelaySeconds, setReadStartDelaySeconds] = useState('1');
  const [globalRules, setGlobalRules] = useState<WordReplacementRule[]>([]);
  const [saveState, setSaveState] = useState<SaveState>({
    type: 'idle',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const importInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (async () => {
      const [{ darkMode }, storedProfiles, settings, storedGlobalRules] =
        await Promise.all([
          browser.storage.sync.get({ darkMode: false }),
          getDomainReaderProfiles(),
          getReaderAutomationSettings(),
          getGlobalReplacementRules(),
        ]);

      document.documentElement.classList.toggle('dark', Boolean(darkMode));

      setProfiles(storedProfiles);
      setGlobalRules(storedGlobalRules);
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
  const pageClass =
    'min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 dark:bg-slate-950 dark:text-slate-100';
  const containerClass = 'mx-auto max-w-5xl space-y-6';
  const sectionClass =
    'rounded-xl border border-slate-300/80 bg-slate-50/90 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/75';
  const sectionTitleClass = 'text-lg font-semibold tracking-tight';
  const sectionDescriptionClass =
    'mb-4 mt-1 text-sm text-slate-700 dark:text-slate-300';
  const labelClass = 'text-sm font-semibold text-slate-800 dark:text-slate-200';
  const inputClass =
    'mt-1.5 w-full rounded-md border border-slate-400 bg-white px-3 py-2 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/60';
  const primaryButtonClass =
    'inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-950';
  const addButtonClass =
    'inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-950';
  const deleteButtonClass =
    'inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-950';
  const profileCardClass =
    'rounded-lg border border-slate-300/80 bg-white/95 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800/70';

  const updateProfileField = (
    index: number,
    key: keyof DomainReaderProfile,
    value: string
  ) => {
    setProfiles((current) =>
      current.map((profile, profileIndex) => {
        if (profileIndex !== index) {
          return profile;
        }

        return {
          ...profile,
          [key]: value,
        };
      })
    );
  };

  const addProfile = () => {
    setProfiles((current) => {
      setActiveProfileIndex(current.length);
      return [...current, { ...EMPTY_PROFILE }];
    });
  };

  const removeProfile = (index: number) => {
    setProfiles((current) => {
      const next = current.filter((_, i) => i !== index);
      setActiveProfileIndex((prev) => {
        if (next.length === 0) return 0;
        if (prev >= next.length) return next.length - 1;
        return prev;
      });
      return next;
    });
  };

  const exportProfiles = () => {
    const json = JSON.stringify(profiles, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'domain-profiles.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importProfiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string);
        if (
          !Array.isArray(parsed) ||
          !parsed.every(
            (p: unknown) =>
              typeof p === 'object' &&
              p !== null &&
              'domain' in p &&
              'titleSelector' in p &&
              'contentSelector' in p &&
              'nextSelector' in p
          )
        ) {
          setSaveState({
            type: 'error',
            message:
              'Invalid profile format. Expected array of {domain, titleSelector, contentSelector, nextSelector}.',
          });
          return;
        }
        setProfiles(parsed as DomainReaderProfile[]);
        setActiveProfileIndex(0);
        setSaveState({
          type: 'success',
          message: `Imported ${parsed.length} profile(s). Click "Save Profiles" to persist.`,
        });
      } catch {
        setSaveState({
          type: 'error',
          message: 'Failed to parse JSON file.',
        });
      }
    };
    reader.readAsText(file);
    // Reset so the same file can be re-imported
    event.target.value = '';
  };

  const updateRuleField = useCallback(
    (
      rules: WordReplacementRule[],
      setRules: (rules: WordReplacementRule[]) => void,
      ruleId: string,
      field: keyof WordReplacementRule,
      value: string | boolean
    ) => {
      setRules(
        rules.map((r) => (r.id === ruleId ? { ...r, [field]: value } : r))
      );
    },
    []
  );

  const renderRuleList = (
    rules: WordReplacementRule[],
    setRules: (rules: WordReplacementRule[]) => void
  ) => (
    <div className="space-y-2">
      {rules.map((rule) => (
        <div
          key={rule.id}
          className="flex items-center gap-2 rounded-md border border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-800"
        >
          <input
            type="checkbox"
            checked={rule.enabled}
            onChange={(e) =>
              updateRuleField(
                rules,
                setRules,
                rule.id,
                'enabled',
                e.target.checked
              )
            }
            className="h-4 w-4 rounded border-slate-400"
            title="Enabled"
          />
          <input
            type="text"
            value={rule.pattern}
            onChange={(e) =>
              updateRuleField(
                rules,
                setRules,
                rule.id,
                'pattern',
                e.target.value
              )
            }
            placeholder="Pattern"
            className="flex-1 rounded-md border border-slate-400 bg-white px-2 py-1 text-sm text-slate-900 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
          />
          <label className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
            <input
              type="checkbox"
              checked={rule.isRegex}
              onChange={(e) =>
                updateRuleField(
                  rules,
                  setRules,
                  rule.id,
                  'isRegex',
                  e.target.checked
                )
              }
              className="h-3.5 w-3.5 rounded border-slate-400"
            />
            Regex
          </label>
          <input
            type="text"
            value={rule.replacement}
            onChange={(e) =>
              updateRuleField(
                rules,
                setRules,
                rule.id,
                'replacement',
                e.target.value
              )
            }
            placeholder="Replacement"
            className="flex-1 rounded-md border border-slate-400 bg-white px-2 py-1 text-sm text-slate-900 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
          />
          <button
            onClick={() => setRules(rules.filter((r) => r.id !== rule.id))}
            className="rounded-md bg-rose-600 px-2 py-1 text-xs font-semibold text-white hover:bg-rose-700"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        onClick={() => setRules([...rules, createEmptyRule()])}
        className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
      >
        Add Rule
      </button>
    </div>
  );

  const saveGlobalRulesHandler = async () => {
    const validationError = validateReplacementRules(globalRules);
    if (validationError) {
      setSaveState({
        type: 'error',
        message: `Global rules: ${validationError}`,
      });
      return;
    }
    try {
      await saveGlobalReplacementRules(globalRules);
      setSaveState({
        type: 'success',
        message: 'Global replacement rules saved.',
      });
    } catch (error) {
      console.error('Failed to save global rules:', error);
      setSaveState({
        type: 'error',
        message: 'Failed to save global replacement rules.',
      });
    }
  };

  const saveProfiles = async () => {
    const validationError = validateProfiles(profiles);
    if (validationError) {
      setSaveState({ type: 'error', message: validationError });
      return;
    }

    for (let i = 0; i < profiles.length; i += 1) {
      const ruleError = validateReplacementRules(
        profiles[i].replacements ?? []
      );
      if (ruleError) {
        setSaveState({
          type: 'error',
          message: `Profile ${i + 1} replacements: ${ruleError}`,
        });
        return;
      }
    }

    try {
      await saveDomainReaderProfiles(profiles);
      const refreshedProfiles = await getDomainReaderProfiles();
      setProfiles(refreshedProfiles);
      setSaveState({
        type: 'success',
        message: 'Domain profiles saved.',
      });
    } catch (error) {
      console.error('Failed to save profiles:', error);
      setSaveState({
        type: 'error',
        message: 'Failed to save domain profiles.',
      });
    }
  };

  const saveAutomationSettings = async () => {
    const parsedNavigationDelay = Number(navigationDelaySeconds);
    const parsedReadStartDelay = Number(readStartDelaySeconds);

    if (Number.isNaN(parsedNavigationDelay) || parsedNavigationDelay < 0) {
      setSaveState({
        type: 'error',
        message: 'Navigation delay must be a non-negative number.',
      });
      return;
    }

    if (Number.isNaN(parsedReadStartDelay) || parsedReadStartDelay < 0) {
      setSaveState({
        type: 'error',
        message: 'Read-start delay must be a non-negative number.',
      });
      return;
    }

    try {
      await saveReaderAutomationSettings({
        nextNavigationDelayMs: Math.round(parsedNavigationDelay * 1000),
        nextReadStartDelayMs: Math.round(parsedReadStartDelay * 1000),
      });

      setSaveState({
        type: 'success',
        message: 'Automation delays saved.',
      });
    } catch (error) {
      console.error('Failed to save automation settings:', error);
      setSaveState({
        type: 'error',
        message: 'Failed to save automation delay settings.',
      });
    }
  };

  if (isLoading) {
    return (
      <div
        className={`${pageClass} flex items-center justify-center text-base font-medium`}
      >
        Loading configuration...
      </div>
    );
  }

  return (
    <main className={pageClass}>
      <div className={containerClass}>
        <header className="rounded-xl border border-slate-300/80 bg-white/80 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
          <h1 className="text-2xl font-bold tracking-tight">
            Web Novel Reader Configuration
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            Reading is restricted to domains configured here. Matching applies
            to each base domain and its subdomains.
          </p>
        </header>

        <section className={sectionClass}>
          <h2 className={sectionTitleClass}>Autonomous Progression Delays</h2>
          <p className={sectionDescriptionClass}>
            Default: {DEFAULT_AUTOMATION_SETTINGS.nextNavigationDelayMs / 1000}s
            navigation delay and{' '}
            {DEFAULT_AUTOMATION_SETTINGS.nextReadStartDelayMs / 1000}s
            read-start delay.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Delay before navigating to next chapter (seconds)
              <input
                type="number"
                min="0"
                step="0.1"
                value={navigationDelaySeconds}
                onChange={(event) =>
                  setNavigationDelaySeconds(event.target.value)
                }
                className={inputClass}
              />
            </label>

            <label className={labelClass}>
              Delay before starting reading on next page (seconds)
              <input
                type="number"
                min="0"
                step="0.1"
                value={readStartDelaySeconds}
                onChange={(event) =>
                  setReadStartDelaySeconds(event.target.value)
                }
                className={inputClass}
              />
            </label>
          </div>

          <button
            onClick={saveAutomationSettings}
            className={`mt-4 ${primaryButtonClass}`}
          >
            Save Delays
          </button>
        </section>

        <section className={sectionClass}>
          <h2 className={sectionTitleClass}>Global Word Replacement Rules</h2>
          <p className={sectionDescriptionClass}>
            These rules apply to all domains before TTS. Use to fix
            mispronunciations, expand abbreviations, or remove unwanted text.
          </p>
          {renderRuleList(globalRules, setGlobalRules)}
          <button
            onClick={saveGlobalRulesHandler}
            className={`mt-4 ${primaryButtonClass}`}
          >
            Save Global Rules
          </button>
        </section>

        <section className={sectionClass}>
          <div className="flex items-center justify-between">
            <h2 className={sectionTitleClass}>Domain Profiles</h2>
            <div className="flex gap-2">
              <button onClick={exportProfiles} className={addButtonClass}>
                Export
              </button>
              <button
                onClick={() => importInputRef.current?.click()}
                className={addButtonClass}
              >
                Import
              </button>
              <input
                ref={importInputRef}
                type="file"
                accept=".json"
                onChange={importProfiles}
                className="hidden"
              />
              <button onClick={addProfile} className={addButtonClass}>
                Add Profile
              </button>
            </div>
          </div>

          {!hasProfiles && (
            <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200">
              No profiles configured. Autonomous reading will not run until at
              least one profile is saved.
            </p>
          )}

          {hasProfiles && (
            <>
              <div className="mt-4 flex gap-1 overflow-x-auto pb-0">
                {profiles.map((profile, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProfileIndex(index)}
                    className={`shrink-0 rounded-t-md border border-b-0 px-3 py-2 text-sm font-medium transition ${
                      index === activeProfileIndex
                        ? 'border-slate-300 bg-white text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-indigo-400'
                        : 'border-transparent text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    {profile.domain.trim() || 'New profile'}
                  </button>
                ))}
              </div>

              {profiles[activeProfileIndex] && (
                <article className="rounded-b-lg rounded-tr-lg border border-slate-300/80 bg-white/95 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800/70">
                  <div className="grid gap-3">
                    <label className={labelClass}>
                      Domain
                      <input
                        type="text"
                        value={profiles[activeProfileIndex].domain}
                        onChange={(event) =>
                          updateProfileField(
                            activeProfileIndex,
                            'domain',
                            event.target.value
                          )
                        }
                        placeholder="allnovel.org"
                        className={inputClass}
                      />
                    </label>

                    <label className={labelClass}>
                      Title selector
                      <input
                        type="text"
                        value={profiles[activeProfileIndex].titleSelector}
                        onChange={(event) =>
                          updateProfileField(
                            activeProfileIndex,
                            'titleSelector',
                            event.target.value
                          )
                        }
                        placeholder=".chapter-title .chapter-text"
                        className={inputClass}
                      />
                    </label>

                    <label className={labelClass}>
                      Content selector
                      <input
                        type="text"
                        value={profiles[activeProfileIndex].contentSelector}
                        onChange={(event) =>
                          updateProfileField(
                            activeProfileIndex,
                            'contentSelector',
                            event.target.value
                          )
                        }
                        placeholder="#chapter-content"
                        className={inputClass}
                      />
                    </label>

                    <label className={labelClass}>
                      Next chapter selector
                      <input
                        type="text"
                        value={profiles[activeProfileIndex].nextSelector}
                        onChange={(event) =>
                          updateProfileField(
                            activeProfileIndex,
                            'nextSelector',
                            event.target.value
                          )
                        }
                        placeholder="#next_chap"
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Domain-Specific Replacement Rules
                    </h3>
                    {renderRuleList(
                      profiles[activeProfileIndex].replacements ?? [],
                      (rules) =>
                        setProfiles((current) =>
                          current.map((p, i) =>
                            i === activeProfileIndex
                              ? {
                                  ...p,
                                  replacements: rules,
                                }
                              : p
                          )
                        )
                    )}
                  </div>

                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => removeProfile(activeProfileIndex)}
                      className={deleteButtonClass}
                    >
                      Delete Profile
                    </button>
                  </div>
                </article>
              )}
            </>
          )}

          <button
            onClick={saveProfiles}
            className={`mt-4 ${primaryButtonClass}`}
          >
            Save Profiles
          </button>
        </section>

        {saveState.type !== 'idle' && (
          <p
            className={`rounded-lg border px-3 py-2 text-sm font-medium ${
              saveState.type === 'success'
                ? 'border-emerald-300 bg-emerald-100 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-100'
                : 'border-rose-300 bg-rose-100 text-rose-900 dark:border-rose-700 dark:bg-rose-900/40 dark:text-rose-100'
            }`}
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
