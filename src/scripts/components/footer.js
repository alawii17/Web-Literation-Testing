class footerSection extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('custom-attribute', 'value-custom-attribute');
    this.innerHTML = `
    <section class="footer-section" id="footer">
        <p>Copyright &copy 2024 || Literation Testing </p>
    </section>
          `;
  }
}

customElements.define('footer-section', footerSection);
