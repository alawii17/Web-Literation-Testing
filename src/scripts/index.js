import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './components/header-bar';
import './components/footer';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('.nav-menu'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
