export function createNavElement(collection, currentComicId) {
  const comics = collection.comics;
  const idx = comics.findIndex(c => c.id === currentComicId);
  const prev = idx > 0 ? comics[idx - 1].id : null;
  const next = idx < comics.length - 1 ? comics[idx + 1].id : null;
  const col = collection.slug;

  if (!prev && !next) return '';

  if (!prev) {
    return `
      <div class="container-fluid d-flex justify-content-end px-4">
        <a href="?col=${col}&id=${next}"><img src="/assets/right.webp" alt="Siguiente cómic" class="nav-arrow"></a>
      </div>
    `;
  }

  if (!next) {
    return `
      <div class="container-fluid d-flex justify-content-start px-4">
        <a href="?col=${col}&id=${prev}"><img src="/assets/left.webp" alt="Anterior cómic" class="nav-arrow"></a>
      </div>
    `;
  }

  return `
    <div class="container-fluid d-flex justify-content-between px-4">
      <a href="?col=${col}&id=${prev}"><img src="/assets/left.webp" alt="Anterior cómic" class="nav-arrow"></a>
      <a href="?col=${col}&id=${next}"><img src="/assets/right.webp" alt="Siguiente cómic" class="nav-arrow"></a>
    </div>
  `;
}
