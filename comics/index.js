// Leer la lista de comics y generar cards
fetch('comics.json')
  .then(response => response.json())
  .then(data => {
    const comicList = readComics(data);
    const cardsHTML = generateCardsHTML(comicList);
    appendCardsToContainer(cardsHTML);
  })

const ordButton = document.querySelector('#reordenarBtn')
ordButton.addEventListener('click', reordenarCards)

function reordenarCards() {
  const parent = document.querySelector('#cards-container');
  const children = parent.children;

  for (let i = children.length - 1; i >= 0; i--) {
      parent.appendChild(children[i]);
  }

  const flecha =  this.querySelector('use').getAttribute('href');
  if (flecha == '#arrow-down') {
    this.querySelector('use').setAttribute('href', '#arrow-up');
    this.querySelector('#textoBtn').innerText = 'Más recientes primero';
  }
  else {
    this.querySelector('use').setAttribute('href', '#arrow-down');
    this.querySelector('#textoBtn').innerText = 'Más antiguos primero';
  }
}

function readComics(obj) {
  let result = [];
  for (let key in obj) {
    result[key] = obj[key];
  }
  return result;
}
function generateCardsHTML(comicList) {
  let cardsHTML = '';
  for (const key in comicList) {
    let cardHTML = createCard(key, comicList[key]);
    cardsHTML += cardHTML;
  }
  return cardsHTML;
}
function createCard(code, data) {
  let html = `
    <div class="col d-flex align-items-stretch" >
      <div class="card shadow-sm" style="background-color: ${data.card_color};">
        <a href="./capitulo/?id=${code}"><img src="./capitulo/${code}/0.${data.format}" class="card-img-top" alt="${data.title}"></a>
        <div class="card-body">
          <a href="./capitulo/?id=${code}" class="btn btn-primary float-end">Leer</a>
        </div>
      </div>
    </div>
  `
  return html;
}
function appendCardsToContainer(cardsHTML) {
  let container = document.getElementById('cards-container');
  container.innerHTML = cardsHTML;
}

// Verificar que exista la carpeta con el nombre del arreglo (pendiente de usar)

// async function checkFolderExists(path) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('HEAD', path);
//   xhr.send();
//   return new Promise((resolve, reject) => {
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           resolve(true);
//         } else {
//           resolve(false);
//         }
//       }
//     };
//   });
// }

// async function myFunction(path) {
//   const folderExists = await checkFolderExists(path);
//   if (folderExists) {
//     console.log('Folder exists');
//   } else {
//     console.log('Folder does not exist');
//   }
// }