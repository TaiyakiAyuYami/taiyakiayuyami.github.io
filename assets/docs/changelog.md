# Changelog

## 2026-03-30 — Code quality and scalability improvements

### Quick Wins
- Fixed `lang="en"` to `lang="es"` on all HTML files (accessibility for screen readers)
- Removed duplicate `readComics()` function from `comics/index.js` and `comics/capitulo/index.js`
- Added `.catch()` error handling to both `fetch()` calls with user-facing error messages
- Invalid comic IDs now show "Historieta no encontrada" with a back link
- Fixed duplicate `id` attribute on scroll-up button in `conocenos/index.html`
- Removed dead commented-out code from `css/style.css` and `comics/index.js`
- Cleaned up `.flip-y` vendor prefixes (kept only unprefixed `transform`)

### Consistency & Maintainability
- Normalized `<head>` sections across all pages (added missing preconnect/preload tags, removed redundant script in menu)
- Standardized page titles to use "Historietas — Taiyaki Ayu-Yami" format
- Moved inline `<style>` blocks from `conocenos/`, `menu/`, and `sucursales/` into `css/style.css` with scoped selectors
- Extracted hardcoded arrow dimensions into `.nav-arrow` CSS class
- Added CSS custom properties (`:root` variables) for theme colors
- Deleted unused `css/normalize.css`

### Accessibility & Structure
- Replaced `onclick="goHome()"` on logo with `<a href="/">` for keyboard accessibility
- Deleted `js/functions.js` (no longer needed) and removed all references
- Replaced `<img onclick="scrollUp()">` with a `<button>` element in `conocenos/`
- Added ARIA label to the sort button in comics list
- Converted `comics/index.js` to ES module for consistency with `comics/capitulo/index.js`
