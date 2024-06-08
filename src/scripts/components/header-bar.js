class headerBar extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('custom-attribute', 'value-custom-attribute');
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.innerHTML = `
      <nav id="navbar">
        <div class="wrapper">
          <div class="nav-logo">
            <img src="./image/Logo.png" alt="Logo Lite">
          </div>
          <button id="hamburger-menu" class="hamburger-menu">
            <i class="fa-solid fa-bars icon-bars"></i>
            <i class="fa-solid fa-xmark icon-close"></i>
          </button>
          <div class="nav-menu">
            <ul>
              <li><a href="#/home">Beranda</a></li>
              <li><a href="#/literationtest">Tes Literasi</a></li>
              <li><a href="#">Forum Diskusi</a></li>
              <li><a href="#">Tentang Kami</a></li>
            </ul>
          </div>
          <div class="nav_login">
            <a href="#/login" id="loginbtn" style="display: none;">Masuk</a>
            <button id="logoutbtn" style="display: none;">Keluar</button>
          </div>
        </div>
      </nav>
      <!-- Logout Confirmation Modal -->
      <div id="logoutModal" class="modal">
        <div class="modal-content">
          <p>Apakah Anda yakin ingin keluar?</p>
          <button id="confirmLogoutButton">Keluar</button>
          <button id="cancelLogoutButton">Batal</button>
        </div>
      </div>
    `;

    this.updateLoginState();
  }

  attachEventListeners() {
    const logoutBtn = this.querySelector('#logoutbtn');
    const confirmLogoutButton = this.querySelector('#confirmLogoutButton');
    const cancelLogoutButton = this.querySelector('#cancelLogoutButton');

    logoutBtn.addEventListener('click', () => {
      this.showLogoutModal();
    });

    confirmLogoutButton.addEventListener('click', () => {
      this.logout();
      this.hideLogoutModal();
    });

    cancelLogoutButton.addEventListener('click', () => {
      this.hideLogoutModal();
    });

    window.addEventListener('hashchange', () => {
      this.hideLogoutModal();
    });

    document.addEventListener('DOMContentLoaded', () => {
      this.hideLogoutModal();
    });
  }

  updateLoginState() {
    const loginBtn = this.querySelector('#loginbtn');
    const logoutBtn = this.querySelector('#logoutbtn');

    if (localStorage.getItem('isLoggedIn') === 'true') {
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'block';
    } else {
      loginBtn.style.display = 'block';
      logoutBtn.style.display = 'none';
    }
  }

  showLogoutModal() {
    const logoutModal = this.querySelector('#logoutModal');
    logoutModal.style.display = 'block';
  }

  hideLogoutModal() {
    const logoutModal = this.querySelector('#logoutModal');
    logoutModal.style.display = 'none';
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.hash = '#/home';
    this.updateLoginState();
  }
}

customElements.define('header-bar', headerBar);
