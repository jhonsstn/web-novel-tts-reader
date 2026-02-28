# Novel Reader TTS Extension

A browser extension for Chrome and Firefox that reads selected text, whole chapters, or text from a chosen point using Microsoft Edge Read Aloud voices over WebSocket.

## Fork origin

This project was originally forked from:
- https://github.com/travisvn/edge-tts-extension

The codebase has been significantly adapted for novel-reading workflows and domain-specific chapter extraction.

## What this extension does

- Read selected text from the context menu
- Read the current page using configured chapter selectors
- Read from a selected point to the end of the page
- Start read-page from the first fully visible readable element in the viewport (including a visible title)
- Navigate paragraph-by-paragraph during playback (previous/next controls)
- Highlight the currently read paragraph while audio is playing
- Support autonomous next-chapter progression with configurable delays

## Core architecture

- `src/background/index.ts`
  - Context menus and keyboard command handling
  - Forwards actions to the active tab
- `src/contentScript.ts`
  - Text extraction orchestration, TTS streaming, playback control, paragraph navigation/highlighting
- `src/utils/browserCommunicate.ts`
  - Edge Read Aloud WebSocket protocol client and streaming parser
- `src/options/index.tsx`
  - Domain profile management and automation delay configuration
- `src/popup/index.tsx`
  - Quick controls (voice, speed, theme, read page, open configuration)

## Requirements

- Node.js + npm
- Chrome or Firefox for loading unpacked builds

## Setup

```bash
npm install
```

## Development and build commands

```bash
npm run dev
npm run dev:chrome
npm run dev:firefox

npm run start
npm run start:chrome
npm run start:firefox

npm run build
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

## Load unpacked extension

### Chrome

1. Run `npm run build:chrome`
2. Open `chrome://extensions/`
3. Enable Developer mode
4. Click **Load unpacked** and choose `dist/chrome`

### Firefox

1. Run `npm run build:firefox`
2. Open `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on...** and select a file inside `dist/firefox`

## Configuration (important for novel sites)

Open the extension options page and define domain profiles:
- Domain
- Title selector
- Content selector
- Next chapter selector

You can also configure:
- Delay before navigating to next chapter
- Delay before starting TTS on the next chapter

Without a matching domain profile, autonomous page reading will not run for that site.

## Keyboard shortcuts

Default commands include:
- Read selection: `Ctrl+Shift+S`
- Read page: `Ctrl+Shift+P`
- Read from here: `Ctrl+Shift+H`
- Toggle play/pause: `Ctrl+Shift+Space`

(Use browser extension shortcut settings to customize.)

## Notes

- Internet access is required for Edge Read Aloud synthesis endpoints.
- Read quality depends on correct selectors for the target site.
- `dist/` is generated output and should not be edited manually.

## License

AGPL-3.0-only (see `package.json`).