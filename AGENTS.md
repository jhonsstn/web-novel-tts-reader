# Repository Guidelines

## Project Overview
`edge-tts-extension` is a browser extension (Chrome + Firefox) that reads selected text or full pages aloud using Microsoft Edge Read Aloud APIs over WebSocket.

Primary user flows:
- Right-click menu actions (`Read Aloud`, `Read Page`, `Read From Here`)
- Keyboard shortcuts defined in manifest commands
- Popup-based voice/speed/theme settings

## Architecture & Data Flow
High-level runtime split:
- **Background script** (`src/background/index.ts`): registers context menus + command shortcuts, forwards actions to active tab.
- **Content script** (`src/contentScript.ts`): receives actions, extracts text, orchestrates TTS streaming + audio playback, renders floating controls.
- **Popup UI** (`src/popup/index.tsx`): React settings UI writing preferences to `browser.storage.sync`.
- **TTS transport layer** (`src/utils/browserCommunicate.ts`): WebSocket protocol implementation for Edge TTS, including chunking and metadata/audio parsing.

Data/control flow:
1. User action (context menu, shortcut, or popup button)
2. Background sends `{ action, text? }` message to content script
3. Content script prepares text (`textExtraction.ts` for "read from here")
4. `BrowserCommunicate.stream()` yields audio chunks from Edge TTS WebSocket
5. Content script appends chunks to `MediaSource`/`SourceBuffer` and plays via `HTMLAudioElement`
6. Control panel state is updated (loading/play/pause/stop)

Firefox-specific streaming constraints and workarounds are documented in `FIREFOX_COMPATIBILITY.md`.

## Key Directories
- `src/background/` — extension background logic
- `src/popup/` — React popup UI + popup HTML/CSS
- `src/components/` — injected control panel UI helpers
- `src/utils/` — protocol, browser detection, text extraction, DRM helpers, config/exception utilities
- `src/lib/` — lower-level TTS client/types and helper modules
- `manifests/` — browser-specific manifest templates (`manifest.chrome.json`, `manifest.firefox.json`)
- `dist/` — generated artifacts (`dist/chrome`, `dist/firefox`); treat as build output

## Important Files
- `package.json` — canonical scripts/dependencies
- `webpack.config.js` — build entry points and browser-targeted manifest copy
- `tsconfig.json` — strict TypeScript settings
- `web-ext-config.cjs` — Firefox packaging config
- `src/contentScript.ts` — central orchestration point
- `src/utils/browserCommunicate.ts` — critical streaming protocol implementation
- `README.md` — install/build and store links
- `FIREFOX_COMPATIBILITY.md` — browser-specific behavior and known pitfalls

## Development Commands
Use **npm** (repo has `package-lock.json`).

Setup:
```bash
npm install
```

Build/dev:
```bash
npm run dev            # webpack development build (default target)
npm run dev:chrome
npm run dev:firefox
npm run start          # watch mode
npm run start:chrome
npm run start:firefox
npm run build          # build both browsers
npm run build:chrome
npm run build:firefox
npm run package:firefox
npm run analyze
npm run analyze:chrome
npm run analyze:firefox
```

Build outputs:
- Chrome: `dist/chrome`
- Firefox: `dist/firefox`

## Runtime/Tooling Preferences
- Runtime/toolchain: Node.js + npm scripts
- Bundler: Webpack 5 (`webpack.config.js`)
- Language: TypeScript (strict mode enabled)
- UI: React 18 (`src/popup`)
- Styling: Tailwind + PostCSS (popup-focused)
- Extension API layer: `webextension-polyfill` (`browser.*` API style)

## Code Conventions & Common Patterns
Follow existing patterns in touched files (do not introduce a parallel style).

Observed conventions:
- Use TypeScript types/interfaces for message/config structures (`ExtensionMessage`, `BrowserCommunicateOptions`, `TTSConfig`).
- Prefer browser-native APIs in extension runtime (no Node-only APIs in content/background scripts).
- Use `browser.*` APIs (from `webextension-polyfill`) instead of `chrome.*` directly.
- Streaming uses async generators (`for await ... of communicate.stream()`).
- Browser branching is explicit via `isFirefox()` for MIME type/chunking/autoplay behavior.
- Error handling pattern: throw typed errors in low-level utils (`src/utils/exceptions.ts`), catch/log near user interaction boundaries with safe fallback paths.
- Storage pattern: user settings in `browser.storage.sync`; cache-like data in `browser.storage.local` (e.g., voice cache).

Extension action/message names are literal strings (`readText`, `readPage`, `readFromHere`, `togglePlayback`, `stopPlayback`); keep producers/consumers in sync when changing them.

## Testing & QA
There is currently **no automated test suite** (`*.test.*`/`*.spec.*` not present; no test script in `package.json`).

Current QA is build + manual validation:
1. Build target (`npm run build:chrome` or `npm run build:firefox`)
2. Load unpacked extension in browser
3. Validate key flows:
   - selected text reading
   - full page reading
   - read-from-here extraction
   - play/pause/stop controls
   - keyboard shortcuts
4. For Firefox changes, re-check scenarios in `FIREFOX_COMPATIBILITY.md`

When adding non-trivial behavior, prefer introducing automated tests where feasible (especially pure utilities in `src/utils/`).