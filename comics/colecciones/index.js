import { createNavElement } from './arrows.js';

const params = new URLSearchParams(window.location.search);
const colSlug = params.get('col');
const comicId = params.get('id');

fetch('../comics.json')
  .then(response => response.json())
  .then(data => {
    const collection = data.collections.find(c => c.slug === colSlug);

    if (!collection) {
      document.getElementById('listing-section').innerHTML = '<p class="text-center py-5">Colección no encontrada. <a href="/comics/">Volver a colecciones</a></p>';
      return;
    }

    if (comicId) {
      readerMode(collection, comicId);
    } else {
      listingMode(collection);
    }
  })
  .catch(err => {
    document.getElementById('listing-section').innerHTML = '<p class="text-center py-5">Error al cargar las historietas.</p>';
    console.error(err);
  })

function listingMode(collection) {
  let cardsHTML = '';
  for (const comic of collection.comics) {
    cardsHTML += `
      <div class="col d-flex align-items-stretch">
        <div class="card shadow-sm" style="background-color: ${comic.card_color};">
          <a href="?col=${collection.slug}&id=${comic.id}"><img src="./${collection.slug}/${comic.id}/0.${comic.format}" class="card-img-top card-img-cover" alt="${comic.title}" loading="lazy" decoding="async"></a>
          <div class="card-body d-flex justify-content-between">
            <div class="d-flex flex-column">
              <h5 class="card-title">${comic.title}</h5>
              <p class="card-text text-body-tertiary">Cómic no. ${comic.id}</p>
            </div>
            <a href="?col=${collection.slug}&id=${comic.id}" class="btn btn-primary align-self-end">Leer</a>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById('cards-container').innerHTML = cardsHTML;

  const ordButton = document.querySelector('#reordenarBtn');
  ordButton.addEventListener('click', reordenarCards);
}

function reordenarCards() {
  const parent = document.querySelector('#cards-container');
  const children = parent.children;

  for (let i = children.length - 1; i >= 0; i--) {
    parent.appendChild(children[i]);
  }

  const flecha = this.querySelector('use').getAttribute('href');
  if (flecha == '#arrow-down') {
    this.querySelector('use').setAttribute('href', '#arrow-up');
    this.querySelector('#textoBtn').innerText = 'Más recientes primero';
  } else {
    this.querySelector('use').setAttribute('href', '#arrow-down');
    this.querySelector('#textoBtn').innerText = 'Más antiguos primero';
  }
}

function readerMode(collection, comicId) {
  const comic = collection.comics.find(c => c.id === comicId);

  if (!comic) {
    document.getElementById('listing-section').innerHTML = '<p class="text-center py-5">Historieta no encontrada. <a href="/comics/">Volver a colecciones</a></p>';
    return;
  }

  // Switch to reader layout
  document.getElementById('listing-banner').style.display = 'none';
  document.getElementById('reader-banner').style.display = '';
  document.getElementById('listing-section').style.display = 'none';
  document.getElementById('reader-section').style.display = '';
  document.body.classList.add('ayu-yami-background');

  // Generate comic page images
  let imgList = '';
  for (let i = 0; i <= comic.pages; i++) {
    imgList += `<img class="img-comic" src="./${collection.slug}/${comicId}/${i}.${comic.format}" ${i === 0 ? 'loading="eager" fetchpriority="high" decoding="sync"' : 'loading="lazy" decoding="async"'}>`;
  }
  document.getElementById('comic-container').innerHTML = imgList;

  // Navigation arrows
  const navHTML = createNavElement(collection, comicId);
  document.getElementById('nav-buttons').innerHTML = navHTML;
}
