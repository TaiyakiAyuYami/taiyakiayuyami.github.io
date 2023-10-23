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

      const botonesCrudo = navBtnKeysRaw(comicId);
      const botonesClave = navKeys(botonesCrudo[0], botonesCrudo[1]);
      const navElement = createNavElement(botonesClave);
      console.log(navElement);
      appendImageElements('nav-buttons', navElement)
    }


    // console.log(comicInfo);
  })

function createNavElement (claves) {
  let html = '';
  if (claves[0] == '') {
    html = `
      <div class="container-fluid d-flex justify-content-end pt-3">
        <a href="../capitulo/?id=${claves[1]}"><img src="/assets/next.webp" alt="Siguiente cómic" style="width: 70px; height: 70px;"></a>
      </div>
    `;
  } else if (claves[1] == "") {
    html = `
    <div class="container-fluid d-flex justify-content-start pt-3">
      <a href="../capitulo/?id=${claves[0]}"><img src="/assets/previous.webp" alt="Anterior cómic" style="width: 70px; height: 70px;"></a>
    </div>
  `;
  } else if (claves[1] == 3) {
    html = `
      <div class="container-fluid d-flex justify-content-start pt-3">
        <a href="../capitulo/?id=${claves[0]}"><img src="/assets/previous.webp" alt="Anterior cómic" style="width: 70px; height: 70px;"></a>
      </div>
    `;
  } else {
    html = `
      <div class="container-fluid d-flex justify-content-between pt-3">
        <a href="../capitulo/?id=${claves[0]}"><img src="/assets/previous.webp" alt="Anterior cómic" style="width: 70px; height: 70px;"></a>
        <a href="../capitulo/?id=${claves[1]}"><img src="/assets/next.webp" alt="Siguiente cómic" style="width: 70px; height: 70px;"></a>
      </div>
    `;
  }
  
  return html;
}

function navKeys (prevoius, next) {
  let key1 = '';
  let key2 = '';
  if (typeof(prevoius) === 'string') {
    key1 = prevoius
  } else {
    key1 = addLeadingZeros(prevoius);
  }

  if (typeof(next) === 'string') {
    key2 = next
  } else {
    key2 = addLeadingZeros(next);
  }

  return [key1, key2];
}

function addLeadingZeros(num) {
  return num.toString().padStart(3, '0');
}

function navBtnKeysRaw(clave) {
  let id = parseInt(clave);
  if (isNaN(id)) {
    // Crear boton next a comic 000
    return ['', 1];
  }
  else if (id == 0) {
    return ['cortos', id + 1 ];
  } else {
    return [id - 1, id + 1 ];
  }
}

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
  for (i = 0; i <= comicInfo.pages; i++ ) {
    imgList += `<img class="img-comic" src="./${comicId}/${i}.${comicInfo.format}">`;
  }
  return imgList;
}

function appendImageElements(idContainer, imgList) {
  const container = document.getElementById(idContainer);
  container.innerHTML = imgList;
}