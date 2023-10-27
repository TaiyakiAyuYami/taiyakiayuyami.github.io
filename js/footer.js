class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .btn-whatsapp {
          background-color: #25d366;
          color: white;
        }
        .btn-whatsapp:hover {
          background-color: #24b85a;
          color: white;
        }
        .link-whatsapp {
          color: #25d366;
          text-decoration: none;
        }
        .btn:first-child:active {
          background-color: #24b85a;
          color: white;
        }
      </style>
      
      <footer class="px-2 py-3 mt-4 border-top">
        <div class="pb-3 text-center">
          <button type="button" class="btn btn-whatsapp"><a target="_blank" rel="noopener noreferrer" class="text-white link-whatsapp" href="https://wa.me/5219993279475">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>&nbsp;Haz tu pedido por WhatsApp aquí</a></button>
        </div>

        <div class="d-flex flex-wrap justify-content-between align-items-center">
          <div class="col-md-4 my-1 d-flex flex-row align-items-center justify-content-start">
            <a href="/" class="text-decoration-none"><img src="/assets/icon-ayu-yami.webp" alt="Ayu-Yami icon" width="30" height="auto"></a>
            <span class="mb-md-0 text-body-secondary fs-6">&nbsp;2023 Taiyaki Ayu-Yami</span>
          </div>

          <div class="col-md-4 my-1 d-flex flex-row align-items-center justify-content-center">
            <a href="https://www.redbubble.com/people/taiyakiayu-yami/shop" target="_blank" rel="noopener noreferrer" class="text-decoration-none"><svg class="bi" width="30" height="30"><use xlink:href="#redbubbleIcon"/></svg>
            <span class="mb-md-0 text-body-secondary fw-bold fs-6">Tienda en línea</span></a>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TaiyakiAyuYami"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/taiyaki.ayuyami"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@taiyaki.ayuyami"><svg class="bi" width="24" height="24"><use xlink:href="#tiktok"/></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TaiyakiAyuYami"><svg class="bi" width="24" height="24"><use xlink:href="#youtube"/></svg></a></li>
            <!-- <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TaiyakiAyuYami"><svg class="bi" width="24" height="24"><use xlink:href="#whatsapp"/></svg></a></li> -->
          </ul>
        </div>
      </footer>
    `
  }
}

customElements.define('footer-component', Footer);