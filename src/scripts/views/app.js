// app.js
import DrawerInitiator from '../utils/drawer-inititator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._intialAppShell();
  }

  // eslint-disable-next-line class-methods-use-this
  _intialAppShell() {
    DrawerInitiator();
  }

  async renderPage() {
    const url = UrlParser.parserActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipToContent = document.querySelector('#skip-to-content');
    skipToContent.addEventListener('click', (event) => {
      event.preventDefault();
      this._onClickSkipContent();
    });
    skipToContent.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.keyCode === 13) {
        this._onClickSkipContent();
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  _onClickSkipContent() {
    document.querySelector('#main-content').focus();
    document.querySelector('#main-content').blur();
  }
}

export default App;
