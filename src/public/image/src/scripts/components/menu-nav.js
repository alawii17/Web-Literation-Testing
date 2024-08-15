/* eslint-disable no-use-before-define */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class navHeader extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('custom-attribute', 'value-custom-attribute');
    this.innerHTML = `
      <nav>
        <div class="wrapper">
          <div class="logo">
            <img  tabindex="0" class="lazyload" data-src="./images/logo.png" alt="Delish Food-Logo" />
          </div>
          <button id="hamburger-menu" class="hamburger-menu">
          <i class="fa-solid fa-bars icon-bars"></i>
          <i class="fa-solid fa-xmark icon-close"></i>
        </button>
          <div id="nav_menu" class="nav_menu">
            <ul>
              <li><a href="#/home" style="min-width: 44px; min-height: 44px;">Home</a></li>
              <li><a href="#/favorite" style="min-width: 44px; min-height: 44px;">Favorite</a></li>
              <li><a href="https://www.linkedin.com/in/muhammad-alawi-alatas-2b521b218/" style="min-width: 44px; min-height: 44px;">About Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-header', navHeader);
