# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`edge-tts-extension` — a Chrome + Firefox browser extension that reads selected text or full pages aloud using Microsoft Edge Read Aloud voices over WebSocket. Forked and adapted for novel-reading workflows.

## Commands

Use **npm** (repo uses `package-lock.json`).

```bash
npm install

npm run dev:chrome        # development build for Chrome
npm run dev:firefox       # development build for Firefox
npm run start:chrome      # watch mode for Chrome
npm run start:firefox     # watch mode for Firefox
npm run build:chrome      # production build for Chrome
npm run build:firefox     # production build for Firefox
npm run build             # builds both browsers
npm run package:firefox   # packages Firefox extension via web-ext
```

Build outputs: `dist/chrome` and `dist/firefox`. There is no automated test suite — QA is manual (load unpacked in browser and test flows).

## Architecture

Runtime is split across four entry points:

1. **Background** (`src/background/index.ts`) — registers context menus and keyboard commands, forwards action messages to the active tab.
2. **Content script** (`src/contentScript.ts`) — central orchestrator: receives messages, extracts text, drives TTS streaming, manages MediaSource/audio playback, handles paragraph navigation/highlighting, and autonomous next-chapter progression.
3. **Popup** (`src/popup/index.tsx`) — React 18 UI for voice, speed, and theme settings; writes to `browser.storage.sync`.
4. **Options** (`src/options/index.tsx`) — React UI for managing per-domain reader profiles (title/content/next-chapter selectors) and automation delays.

**TTS transport**: `src/utils/browserCommunicate.ts` implements the Edge Read Aloud WebSocket protocol — connects, sends SSML, and yields audio chunks via async generator. Chrome uses MP3 (4 KB chunks); Firefox uses WebM/Opus (32 KB chunks) due to MediaSource constraints documented in `FIREFOX_COMPATIBILITY.md`.

**Domain profiles** (`src/utils/domainReaderProfiles.ts`) and **domain extraction** (`src/utils/domainExtraction.ts`) power site-specific content selection for novel sites.

## Key Conventions

- Use `browser.*` APIs from `webextension-polyfill`, never `chrome.*` directly.
- Browser branching is explicit via `isFirefox()` (`src/utils/browserDetection.ts`).
- Async generator pattern: `for await (const chunk of communicate.stream())`.
- Typed errors thrown in `src/utils/exceptions.ts`, caught near user interaction boundaries.
- Storage: `browser.storage.sync` for user settings; `browser.storage.local` for caches (voices).
- Message action names are literal strings (`readText`, `readPage`, `readFromHere`, `togglePlayback`, `stopPlayback`) — keep producers and consumers in sync.
- Two manifests (`manifests/manifest.chrome.json`, `manifests/manifest.firefox.json`) are copied by webpack to the respective `dist/` directories.

## Firefox-Specific Pitfalls

See `FIREFOX_COMPATIBILITY.md` for full details. Key points:
- Firefox requires `audio/webm; codecs="opus"` in MediaSource; Chrome uses `audio/mpeg`.
- Cross-compartment `ArrayBuffer` must be copied manually byte-by-byte (FileReader + Uint8Array loop).
- 32 KB chunk size avoids WebM concatenation failures from multiple WebSocket connections.
