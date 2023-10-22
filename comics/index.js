// Leer la lista de comics y generar cards
fetch('comics.json')
  .then(response => response.json())
  .then(data => {
    const comicList = readComics(data);
    const cardsHTML = generateCardsHTML(comicList);
    appendCardsToContainer(cardsHTML);
  })

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
        <a href="./capitulos/?id=${code}"><img src="./capitulos/${code}/0.${data.format}" class="card-img-top" alt="${data.title}"></a>
        <div class="card-body">
          <a href="./capitulos/?id=${code}" class="btn btn-primary float-end">Leer</a>
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