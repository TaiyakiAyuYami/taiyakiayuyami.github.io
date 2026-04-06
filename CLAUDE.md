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

Comics are organized into **collections** (e.g., "Capítulos Cortos", "Tomo 1") via `comics/comics.json`. The JSON has a `collections` array; each collection has a `slug`, `title`, `card_color`, `cover` image path, and a `comics` array of individual comic entries.

- `comics/index.html` + `comics/index.js` — shows collection cards
- `comics/colecciones/index.html` + `comics/colecciones/index.js` — dual-purpose page:
  - **Listing mode** (`?col={slug}`) — shows comics within a collection with sort toggle
  - **Reader mode** (`?col={slug}&id={comicId}`) — comic reader with page images and prev/next arrows
- `comics/colecciones/arrows.js` — navigation between chapters within a collection (ES module)
- Comic images live in `comics/colecciones/{collection-slug}/{comic-id}/` as numbered files (`0.webp`, `1.webp`, ...)

To add a new comic: add an entry to the collection's `comics` array in `comics/comics.json` and create a folder under `comics/colecciones/{collection-slug}/` with numbered page images.

To add a new collection: add a new object to the `collections` array in `comics/comics.json` and create a directory under `comics/colecciones/`.

### Sections

Each section is a directory with its own `index.html`: `sucursales/` (locations/maps), `conocenos/` (about), `menu/` (menu), `comics/` (comics).

## Conventions

- Indentation: 2 spaces (see `.editorconfig`)
- Images: WebP format preferred
- All assets under `assets/`; comic images under `comics/colecciones/{collection-slug}/`
- Character theme colors: Yami = yellow/pink, Ayu = mint green/cobalt blue, neutral = sky blue
