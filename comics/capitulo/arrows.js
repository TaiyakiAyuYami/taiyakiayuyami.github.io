const createNavElement = function (claves, nextComicNumber) {
  let html = '';
  if (claves[0] == '') {
    html = `
      <div class="container-fluid d-flex justify-content-end px-4">
        <a href="../capitulo/?id=${claves[1]}"><img src="/assets/right.webp" alt="Siguiente cómic" style="width: 60px; height: 70px;"></a>
      </div>
    `;
  } else if (claves[1] == "") {
    html = `
    <div class="container-fluid d-flex justify-content-start px-4">
      <a href="../capitulo/?id=${claves[0]}"><img src="/assets/left.webp" alt="Anterior cómic" style="width: 60px; height: 70px;"></a>
    </div>
  `;
  } else if (claves[1] == nextComicNumber) {
    html = `
      <div class="container-fluid d-flex justify-content-start px-4">
        <a href="../capitulo/?id=${claves[0]}"><img src="/assets/left.webp" alt="Anterior cómic" style="width: 60px; height: 70px;"></a>
      </div>
    `;
  } else {
    html = `
      <div class="container-fluid d-flex justify-content-between px-4">
        <a href="../capitulo/?id=${claves[0]}"><img src="/assets/left.webp" alt="Anterior cómic" style="width: 60px; height: 70px;"></a>
        <a href="../capitulo/?id=${claves[1]}"><img src="/assets/right.webp" alt="Siguiente cómic" style="width: 60px; height: 70px;"></a>
      </div>
    `;
  }
  
  return html;
}

const navKeys = function (previous, next) {
  let key1 = '';
  let key2 = '';
  if (typeof(previous) === 'string') {
    key1 = previous
  } else {
    key1 = addLeadingZeros(previous);
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

const navKeysRaw = function (idURL) {
  let id = parseInt(idURL);
  if (isNaN(id)) {
    // Crear boton next a comic 000
    return ['', 0];
  }
  else if (id == 0) {
    return ['cortos', id + 1 ];
  } else {
    return [id - 1, id + 1 ];
  }
}

export { navKeysRaw, navKeys, createNavElement };