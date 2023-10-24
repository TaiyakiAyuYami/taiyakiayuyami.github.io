class Banner extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let classes = this.getAttribute('data-classes');
    let bgColor = this.getAttribute('data-bg-color');
    let flipChar = this.getAttribute('data-flip-char');
    let text1 = this.getAttribute('data-text1');
    let text2 = this.getAttribute('data-text2');

    if (!classes) classes = '';
    if (!bgColor) bgColor = '#8cb3ee';
    if (!flipChar) flipChar = '';
    if (!text1) text1 = '';
    if (!text2) text2 = '';
    
    this.innerHTML = `
      <style>
        img:hover {
          cursor: pointer;
        }
      </style>

      <!-- Banner -->
      <div class="container rounded-bottom d-flex justify-content-around align-items-center py-3 ${classes}" style="background-color: ${bgColor};">
      <img onclick="goHome()" class="logo-header" src="/assets/logo.webp" alt="Ayu-Yami logo">
        <div class="text-center">
          <div class="bubblegum title"><span class="d-inline-block flip-y">${flipChar}</span>${text1}</div>
          <div class="bubblegum title">${text2}</div>
        </div>
      </div>
    `
  }
}

customElements.define('banner-component', Banner);