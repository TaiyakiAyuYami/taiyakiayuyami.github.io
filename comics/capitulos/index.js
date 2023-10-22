const urlParams = new URLSearchParams(window.location.search);
const comicId = urlParams.get('id');

fetch('../comics.json')
  .then(response => response.json())
  .then(data => {
    const comicList = readComics(data);
    const comicInfo = comicList[comicId];
    if (!comicInfo) console.log('No se encontró historieta :(');
    else {
      const imgList = createImageElements(comicInfo)
      appendImageElements('comic-container', imgList);
    }
  }) 

function readComics(obj) {
  let result = [];
  for (let key in obj) {
    result[key] = obj[key];
  }
  return result;
}

function readComicInfo(obj) {
  const info = [];
  for (const key in obj) {
    info[key] = obj[key];
  }
  return info;
}

function createImageElements(comicInfo) {
  let imgList = '';
  for (i = 0; i < comicInfo.pages; i++ ) {
    imgList += `<img class="img-comic" src="./${comicId}/${i}.jpg">`;
  }
  return imgList;
}

function appendImageElements(idContainer, imgList) {
  const container = document.getElementById(idContainer);
  container.innerHTML = imgList;
}