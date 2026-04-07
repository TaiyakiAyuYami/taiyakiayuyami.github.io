const state = {
  collection: 'all',
  personaje: 'all',
};

let allStickers = [];
let collections = [];
let characters = [];

fetch('./stickers.json')
  .then(response => response.json())
  .then(data => {
    collections = data.collections;

    // Flatten all stickers, attaching collection info to each item
    for (const col of collections) {
      for (const sticker of col.stickers) {
        allStickers.push({
          ...sticker,
          collection: { slug: col.slug, title: col.title, color: col.color },
        });
      }
    }

    // Extract unique characters preserving first-seen order
    const seen = new Set();
    for (const s of allStickers) {
      for (const p of s.personaje) {
        if (!seen.has(p)) {
          seen.add(p);
          characters.push(p);
        }
      }
    }

    buildCollectionFilter();
    buildPersonajeFilter();
    render();
  })
  .catch(err => {
    document.getElementById('stickers-grid').innerHTML = '<p class="text-center py-5">Error al cargar los stickers.</p>';
    console.error(err);
  });

function buildCollectionFilter() {
  const container = document.getElementById('filter-collection');
  let html = `<button type="button" class="btn btn-sm btn-outline-secondary filter-pill active" data-key="collection" data-value="all">Todas</button>`;
  for (const col of collections) {
    html += `<button type="button" class="btn btn-sm filter-pill" data-key="collection" data-value="${col.slug}" style="background-color: ${col.color}; border-color: ${col.color};">${col.title}</button>`;
  }
  container.innerHTML = html;
  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', onPillClick);
  });
}

function buildPersonajeFilter() {
  const container = document.getElementById('filter-personaje');
  let html = `<button type="button" class="btn btn-sm btn-outline-secondary filter-pill active" data-key="personaje" data-value="all">Todos</button>`;
  for (const c of characters) {
    const label = c.charAt(0).toUpperCase() + c.slice(1);
    html += `<button type="button" class="btn btn-sm btn-outline-primary filter-pill" data-key="personaje" data-value="${c}">${label}</button>`;
  }
  container.innerHTML = html;
  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', onPillClick);
  });
}

function onPillClick(e) {
  const btn = e.currentTarget;
  const key = btn.dataset.key;
  const value = btn.dataset.value;
  state[key] = value;

  // Update active state for this filter row
  const rowId = key === 'collection' ? 'filter-collection' : 'filter-personaje';
  document.querySelectorAll(`#${rowId} .filter-pill`).forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  render();
}

function render() {
  const filtered = allStickers.filter(s => {
    const collectionMatch = state.collection === 'all' || s.collection.slug === state.collection;
    const personajeMatch = state.personaje === 'all' || s.personaje.includes(state.personaje);
    return collectionMatch && personajeMatch;
  });

  if (filtered.length === 0) {
    document.getElementById('stickers-grid').innerHTML = '<p class="text-center py-5 grid-empty">No hay stickers que coincidan con los filtros.</p>';
    return;
  }

  let html = '';
  for (const s of filtered) {
    const src = `./colecciones/${s.collection.slug}/${s.id}.${s.format}`;
    const alt = `${s.collection.title} — ${s.personaje.join(', ')}`;
    html += `
      <a class="sticker-item" href="${src}" target="_blank" rel="noopener" title="${alt}">
        <img src="${src}" alt="${alt}" loading="lazy" decoding="async">
      </a>
    `;
  }
  document.getElementById('stickers-grid').innerHTML = html;
}
