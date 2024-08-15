class footerElement extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('custom-attribute', 'value-custom-attribute');
    this.innerHTML = `
        <div class="wrapper">
          <p>Copyright &copy 2024 || Delish Food || Muhammad Alawi</p>
        </div>
        `;
  }
}

customElements.define('footer-element', footerElement);
