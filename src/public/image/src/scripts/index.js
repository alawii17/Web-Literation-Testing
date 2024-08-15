/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/menu-nav.js';
import './components/footer.js';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';

const app = new App({
  button: document.querySelector('#hamburger-menu'),
  drawer: document.querySelector('#nav_menu'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
