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
    if (this._content) {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } else {
      console.error('Element with id "main-content" not found');
    }
  }
}

export default App;
