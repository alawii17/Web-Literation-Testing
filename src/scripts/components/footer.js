class footerSection extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('custom-attribute', 'value-custom-attribute');
    this.innerHTML = `
    <section class="footer-section" id="footer">
        <div class="footer-top">
          <div class="footer-logo">
            <img tabindex="0" src="./image/Logo.png" alt="Logo-Lite">
          </div>
          <div class="footer-top-info">
            <div class="footer-followUs">
              <h2 tabindex="0">Follow Us</h2>
              <ul>
                <li><a href="#">Github</a></li>
                <li><a href="#">Discord</a></li>
              </ul>
            </div>
            <div class="footer-legal">
              <h2 tabindex="0">Legal</h2>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          </div>
        <div class="footer-bottom">
          <div class="footer-copyright">
            <p tabindex="0">Copyright &copy 2024 || Literation Testing </p>
          </div>
          <div class="footer-sosmed">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </section>
          `;
  }
}

customElements.define('footer-section', footerSection);
