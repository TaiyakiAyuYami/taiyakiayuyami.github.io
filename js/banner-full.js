class BannerFull extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let bgColor = this.getAttribute('data-bg-color');

    if (!bgColor) bgColor = '#fff0';

    this.innerHTML = `
      <style>
        img:hover {
          cursor: pointer;
        }
      </style>

      <!-- Banner -->
      <div class="d-flex justify-content-center align-items-center py-3" style="background-color: ${bgColor}">
        <img onclick="goHome()" class="logo-header" src="/assets/logo.webp" alt="Ayu-Yami logo">
      </div>
    `
  }
}

customElements.define('banner-full-component', BannerFull);