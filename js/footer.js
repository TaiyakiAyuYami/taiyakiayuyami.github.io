class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="d-flex flex-wrap justify-content-between align-items-center px-2 py-3 mt-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <img src="/assets/icon-ayu-yami.webp" alt="Ayu-Yami icon" width="30" height="auto">
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary fs-6">2023 Taiyaki Ayu-Yami</span>
        </div>
      
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TaiyakiAyuYami"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
          <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/taiyaki.ayuyami"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
          <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@taiyaki.ayuyami"><svg class="bi" width="24" height="24"><use xlink:href="#tiktok"/></svg></a></li>
          <li class="ms-3"><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TaiyakiAyuYami"><svg class="bi" width="24" height="24"><use xlink:href="#youtube"/></svg></a></li>
        </ul>
      </footer>
    `
  }
}

customElements.define('footer-component', Footer);