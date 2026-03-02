import browser from 'webextension-polyfill';
import { WordReplacementRule } from './domainReaderProfiles';

const GLOBAL_REPLACEMENT_RULES_KEY = 'wordReplacementRules';

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function applyReplacementRules(text: string, rules: WordReplacementRule[]): string {
  let result = text;

  for (const rule of rules) {
    if (!rule.enabled || !rule.pattern) {
      continue;
    }

    try {
      const regex = rule.isRegex
        ? new RegExp(rule.pattern, 'g')
        : new RegExp(escapeRegExp(rule.pattern), 'g');
      result = result.replace(regex, rule.replacement);
    } catch {
      // Skip invalid regex patterns
    }
  }

  return result;
}

export function applyAllReplacementRules(
  text: string,
  globalRules: WordReplacementRule[],
  domainRules: WordReplacementRule[],
): string {
  let result = applyReplacementRules(text, globalRules);
  result = applyReplacementRules(result, domainRules);
  return result;
}

export async function getGlobalReplacementRules(): Promise<WordReplacementRule[]> {
  const result = await browser.storage.sync.get(GLOBAL_REPLACEMENT_RULES_KEY);
  const stored = result[GLOBAL_REPLACEMENT_RULES_KEY];
  return Array.isArray(stored) ? stored : [];
}

export async function saveGlobalReplacementRules(rules: WordReplacementRule[]): Promise<void> {
  await browser.storage.sync.set({ [GLOBAL_REPLACEMENT_RULES_KEY]: rules });
}
