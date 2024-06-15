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

    if (page && typeof page.render === 'function') {
      this._content.innerHTML = await page.render();
      if (typeof page.afterRender === 'function') {
        await page.afterRender();
      }
    } else {
      console.error(`Page with URL '${url}' not found or render method is not a function.`);
    }
  }
}

export default App;
