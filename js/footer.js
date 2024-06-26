class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const year = new Date().getFullYear();
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

        /* Actual styles */
        footer {
          padding: 12px 8px;
          margin-top: 2em;
          border-top: 1px solid #dee2e6;
        }

        .whatsapp {
          display: flex;
          justify-content: center;
          align-items: center;

          padding-left: 50px;
        }

        footer .icons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;

          padding: 18px 0px 0px;
        }

        footer .social ul {
          display: flex;
          gap: .9em;

          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        @media all and (max-width: 576px) {
          .whatsapp {
            padding-left: 0px;
          }
          footer .icons {
            justify-content: space-around;
            gap: 8px;
          }          
        }
      </style>
      
      <footer>
        <div class="whatsapp">
          <button type="button" class="btn btn-whatsapp"><a target="_blank" rel="noopener noreferrer" class="text-white link-whatsapp" href="https://wa.me/5219993279475"><svg fill="currentColor" width="24" height="24"><use xlink:href="#whatsapp"/></svg>&nbsp;Haz tu pedido por WhatsApp aquí</a></button>
        </div>
        <div class="icons">
          <div class="icon-text">
            <a href="/" class="text-decoration-none"><img src="/assets/icon-ayu-yami.webp" alt="Ayu-Yami icon" width="30" height="auto"></a>
            <span class="text-body-secondary fs-6">${year} Taiyaki Ayu-Yami</span>
          </div>

          <div class="icon">
            <a href="https://www.redbubble.com/people/taiyakiayu-yami/shop" target="_blank" rel="noopener noreferrer" class="text-decoration-none"><svg class="bi" width="30" height="30"><use xlink:href="#redbubbleIcon"/></svg>
            <span class="text-body-secondary fw-bold fs-6">Tienda en línea</span></a>
          </div>

          <div class="icon">
            <a class="text-decoration-none" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/aF3i35kVTvQ3X9JK7"><svg class="bi" width="30" height="30"><use xlink:href="#bi-location"/></svg>
            <span class="text-body-secondary fw-bold fs-6">¡Visítanos!</span></a>
          </div>

          <div class="social">
            <ul>
              <li><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TaiyakiAyuYami"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
              <li><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/taiyaki.ayuyami"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
              <li><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@taiyaki.ayuyami"><svg class="bi" width="24" height="24"><use xlink:href="#tiktok"/></svg></a></li>
              <li><a class="text-body-secondary" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TaiyakiAyuYami"><svg class="bi" width="24" height="24"><use xlink:href="#youtube"/></svg></a></li>
            </ul>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('footer-component', Footer);