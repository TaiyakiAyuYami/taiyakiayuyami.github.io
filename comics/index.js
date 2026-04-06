fetch('comics.json')
  .then(response => response.json())
  .then(data => {
    const cardsHTML = generateCollectionCards(data.collections);
    document.getElementById('cards-container').innerHTML = cardsHTML;
  })
  .catch(err => {
    document.getElementById('cards-container').innerHTML = '<p class="text-center py-5">Error al cargar las historietas.</p>';
    console.error(err);
  })

function generateCollectionCards(collections) {
  let html = '';
  for (const col of collections) {
    html += `
      <div class="col d-flex align-items-stretch">
        <div class="card shadow-sm" style="background-color: ${col.card_color};">
          <a href="./colecciones/?col=${col.slug}"><img src="./colecciones/${col.slug}/${col.cover}" class="card-img-top card-img-cover" alt="${col.title}" loading="lazy" decoding="async"></a>
          <div class="card-body d-flex justify-content-between align-items-center">
            <h5 class="card-title">${col.title}</h5>
            <a href="./colecciones/?col=${col.slug}" class="btn btn-primary">Ver</a>
          </div>
        </div>
      </div>
    `;
  }
  return html;
}
