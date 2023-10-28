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
      
      <footer class="container-fluid mt-3 mb-1 border-top">
        <div class="row row-cols-auto py-1 justify-content-center">
          <div class="col py-1">
            <button type="button" class="btn btn-whatsapp"><a target="_blank" rel="noopener noreferrer" class="text-white link-whatsapp" href="https://wa.me/5219993279475"><svg fill="currentColor" width="24" height="24"><use xlink:href="#whatsapp"/></svg>&nbsp;Haz tu pedido por WhatsApp aquí</a></button>
          </div>
        </div>

        <div class="row row-cols-auto justify-content-between">
          <div class="col py-1">
            <a href="/" class="text-decoration-none"><img src="/assets/icon-ayu-yami.webp" alt="Ayu-Yami icon" width="30" height="auto"></a>
            <span class="text-body-secondary fs-6">2023 Taiyaki Ayu-Yami</span>
          </div>
          <div class="col py-1">
            <a href="https://www.redbubble.com/people/taiyakiayu-yami/shop" target="_blank" rel="noopener noreferrer" class="text-decoration-none"><svg class="bi" width="30" height="30"><use xlink:href="#redbubbleIcon"/></svg>
            <span class="text-body-secondary fw-bold fs-6">Tienda en línea</span></a>
          </div>
        </div>
          
        <div class="row justify-content-center">
          <div class="col py-1">
            <ul class="nav myt-1 justify-content-center list-unstyled d-flex">
              <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TaiyakiAyuYami"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
              <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/taiyaki.ayuyami"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
              <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@taiyaki.ayuyami"><svg class="bi" width="24" height="24"><use xlink:href="#tiktok"/></svg></a></li>
              <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TaiyakiAyuYami"><svg class="bi" width="24" height="24"><use xlink:href="#youtube"/></svg></a></li>
            </ul>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('footer-component', Footer);