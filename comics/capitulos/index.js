function readComicInfo(obj) {
  const info = [];
  for (const key in obj) {
    info[key] = obj[key];
  }
  return info;
}

function createImagesTags(comicInfo) {
  let imgList = '';
  for (i = 0; i < comicInfo.pages; i++ ) {
    imgList += `<img class="img-comic" src="./comic/${i}.jpg">`;
  }
  return imgList;
}

// function appendImagesTags(idContainer, imgList) {
//   const container = document.getElementById(idContainer);
//   container.innerHTML = imgList;
// }

fetch('../comics.json')
  .then(response => response.json())
  .then(data => {
    // const info = readComicInfo(data);
    // const imgList = createImagesTags(info);
    // appendImagesTags('comic-container', imgList);
  }) 
