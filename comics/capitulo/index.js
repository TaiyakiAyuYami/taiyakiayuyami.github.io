import { navKeysRaw, navKeys, createNavElement} from './arrows.js';
const urlParams = new URLSearchParams(window.location.search);
const comicId = urlParams.get('id');

fetch('../comics.json')
  .then(response => response.json())
  .then(data => {
    const comicList = readComics(data);
    const comicInfo = comicList[comicId];

    if (comicInfo == null) console.log('No se encontró historieta :(');
    else {
      // Pintar imagenes
      const imgListHTML = createImageElements(comicInfo)
      addInnerHTML('comic-container', imgListHTML);

      // Flechas de navegacion
      const nextComicNumber = Object.keys(comicList).length - 1;   // No cambiar numeracion comics ('cortos', 000, 001, ..., n)
      const botonesCrudo = navKeysRaw(comicId);
      const botonesClave = navKeys(botonesCrudo[0], botonesCrudo[1]);
      const buttonsNavHTML = createNavElement(botonesClave, nextComicNumber);
      addInnerHTML('nav-buttons', buttonsNavHTML)
    }
  })

function readComics(obj) {
  let result = [];
  for (let key in obj) {
    result[key] = obj[key];
  }
  return result;
}

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
