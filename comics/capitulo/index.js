import { navKeysRaw, navKeys, createNavElement} from './arrows.js';
const urlParams = new URLSearchParams(window.location.search);
const comicId = urlParams.get('id');

fetch('../comics.json')
  .then(response => response.json())
  .then(data => {
    const comicInfo = data[comicId];

    if (comicInfo == null) {
      addInnerHTML('comic-container', '<p class="text-center py-5">Historieta no encontrada. <a href="/comics/">Volver a historietas</a></p>');
      return;
    }

    // Pintar imagenes
    const imgListHTML = createImageElements(comicInfo)
    addInnerHTML('comic-container', imgListHTML);

    // Flechas de navegacion
    const nextComicNumber = Object.keys(data).length - 1;   // No cambiar numeracion comics ('cortos', 000, 001, ..., n)
    const botonesCrudo = navKeysRaw(comicId);
    const botonesClave = navKeys(botonesCrudo[0], botonesCrudo[1]);
    const buttonsNavHTML = createNavElement(botonesClave, nextComicNumber);
    addInnerHTML('nav-buttons', buttonsNavHTML)
  })
  .catch(err => {
    document.getElementById('comic-container').innerHTML = '<p class="text-center py-5">Error al cargar la historieta.</p>';
    console.error(err);
  })

function createImageElements(comicInfo) {
  let imgList = '';
  for (let i = 0; i <= comicInfo.pages; i++ ) {
    imgList += `<img class="img-comic" src="./${comicId}/${i}.${comicInfo.format}" ${i === 0 ? 'loading="eager" fetchpriority="high" decoding="sync"' : 'loading="lazy" decoding="async"'}>`;
  }
  return imgList;
}

function addInnerHTML(idContainer, stringHTML) {
  const container = document.getElementById(idContainer);
  container.innerHTML = stringHTML;
}
