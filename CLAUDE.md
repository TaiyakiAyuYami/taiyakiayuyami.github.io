# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for **Taiyaki Ayu-Yami**, a taiyaki shop. Hosted on GitHub Pages at https://taiyakiayuyami.github.io. Written in Spanish. No build step — plain HTML, CSS, and vanilla JavaScript served directly.

## Development

Serve locally with any static file server from the project root. All paths use absolute URLs (e.g., `/css/style.css`, `/assets/logo.webp`), so the server must serve from `/`.

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

No package manager, no build tools, no tests, no linter.

## Architecture

### Shared Layout via Web Components

Header, footer, and banner are **custom elements** defined in `js/`:
- `<header-component>` (`js/header.js`) — navbar + SVG icon symbols (social media icons, arrows, etc.)
- `<footer-component>` (`js/footer.js`) — WhatsApp CTA, social links, year auto-updated
- `<banner-component>` (`js/banner.js`) — logo + title text, configurable via `data-*` attributes (`data-bg-color`, `data-text1`, `data-text2`, `data-flip-char`)
- `<banner-full-component>` (`js/banner-full.js`) — logo-only variant used by the comic reader

Every page includes these scripts with `defer` and uses the custom elements in its HTML. SVG symbols (social icons, arrows) are defined inside `<header-component>` and referenced elsewhere via `<use xlink:href="#symbolId"/>`.

### CSS Stack

- `css/normalize.min.css` — CSS reset
- `css/bootstrap.css` — Bootstrap (bundled, not CDN)
- `css/style.css` — custom styles; fonts: BubbleGum (CDN) for titles, Open Sans (self-hosted woff2) for body

### Comics System

Comics are data-driven via `comics/comics.json`. Each entry has a key (e.g., `"cortos"`, `"000"`, `"001"`), title, page count, image format, card color, and date.

- `comics/index.html` + `comics/index.js` — lists all comics as cards from the JSON, with sort toggle
- `comics/capitulo/index.html` + `comics/capitulo/index.js` — comic reader, loads pages by `?id=` query param
- `comics/capitulo/arrows.js` — navigation between chapters (prev/next), exported as ES module
- Comic images live in `comics/capitulo/{id}/` as numbered files (`0.webp`, `1.webp`, ...)

To add a new comic: add an entry to `comics/comics.json` and create a folder under `comics/capitulo/` with numbered page images.

### Sections

Each section is a directory with its own `index.html`: `sucursales/` (locations/maps), `conocenos/` (about), `menu/` (menu), `comics/` (comics).

## Conventions

- Indentation: 2 spaces (see `.editorconfig`)
- Images: WebP format preferred
- All assets under `assets/`; comic images under `comics/capitulo/`
- Character theme colors: Yami = yellow/pink, Ayu = mint green/cobalt blue, neutral = sky blue
