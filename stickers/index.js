// Empty Set means "all" — no filter applied for that category
const state = {
  collection: new Set(),
  personaje: new Set(),
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

    // Sort globally by numeric id
    allStickers.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));

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
    updateCollectionPillStyles();
    render();
  })
  .catch(err => {
    document.getElementById('stickers-grid').innerHTML = '<p class="text-center py-5">Error al cargar los stickers.</p>';
    console.error(err);
  });

function buildCollectionFilter() {
  const container = document.getElementById('filter-collection');
  let html = `<button type="button" class="btn btn-sm btn-secondary filter-pill active" data-key="collection" data-value="all">Todas</button>`;
  for (const col of collections) {
    html += `<button type="button" class="btn btn-sm filter-pill collection-pill" data-key="collection" data-value="${col.slug}" data-color="${col.color}" style="border-color: ${col.color};">${col.title}</button>`;
  }
  container.innerHTML = html;
  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', onPillClick);
  });
}

function updateCollectionPillStyles() {
  const todas = document.querySelector('#filter-collection .filter-pill[data-value="all"]');
  if (todas.classList.contains('active')) {
    todas.classList.remove('btn-outline-secondary');
    todas.classList.add('btn-secondary');
  } else {
    todas.classList.remove('btn-secondary');
    todas.classList.add('btn-outline-secondary');
  }

  document.querySelectorAll('#filter-collection .collection-pill').forEach(btn => {
    const color = btn.dataset.color;
    if (btn.classList.contains('active')) {
      btn.style.backgroundColor = color;
    } else {
      btn.style.backgroundColor = '';
    }
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
  btn.blur();
  const key = btn.dataset.key;
  const value = btn.dataset.value;
  const set = state[key];
  const rowId = key === 'collection' ? 'filter-collection' : 'filter-personaje';

  if (value === 'all') {
    // Clicking "Todas/Todos" clears all selections in this row
    set.clear();
  } else {
    // Toggle this value in the set
    if (set.has(value)) {
      set.delete(value);
    } else {
      set.add(value);
    }
  }

  // Sync active classes from state
  document.querySelectorAll(`#${rowId} .filter-pill`).forEach(b => {
    const v = b.dataset.value;
    if (v === 'all') {
      b.classList.toggle('active', set.size === 0);
    } else {
      b.classList.toggle('active', set.has(v));
    }
  });

  if (key === 'collection') {
    updateCollectionPillStyles();
  }

  render();
}

function render() {
  const filtered = allStickers.filter(s => {
    const collectionMatch = state.collection.size === 0 || state.collection.has(s.collection.slug);
    const personajeMatch = state.personaje.size === 0 || [...state.personaje].every(p => s.personaje.includes(p));
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
        <div class="sticker-thumb">
          <img src="${src}" alt="${alt}" loading="lazy" decoding="async">
        </div>
        <span class="sticker-id">#${s.id}</span>
      </a>
    `;
  }
  document.getElementById('stickers-grid').innerHTML = html;
}
