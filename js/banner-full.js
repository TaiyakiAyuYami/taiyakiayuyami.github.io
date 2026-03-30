class BannerFull extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let bgColor = this.getAttribute('data-bg-color');

    if (!bgColor) bgColor = '#fff0';

    this.innerHTML = `
      <!-- Banner -->
      <div class="d-flex justify-content-center align-items-center py-3" style="background-color: ${bgColor}">
        <a href="/" class="logo-header-link"><img class="logo-header" src="/assets/logo.webp" alt="Ayu-Yami logo" loading="eager" fetchpriority="high" decoding="sync"></a>
      </div>
    `
  }
}

customElements.define('banner-full-component', BannerFull);