/* eslint-disable import/no-extraneous-dependencies */
import Swal from 'sweetalert2';

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
            <img tabindex="0" src="./image/Logo.png" alt="Logo Lite">
          </div>
          <div class="nav-menu">  
            <ul>
              <li tabindex="0"><a href="#/home">Beranda</a></li>
              <li tabindex="0"><a href="#/literationtest">Tes Literasi</a></li>
              <li tabindex="0"><a href="#/forumdiskusi">Forum Diskusi</a></li>
              <li tabindex="0"><a href="#/aboutus">Tentang Kami</a></li>
            </ul>
          </div>
          <div class="nav-side">
          <button id="hamburger-menu" class="hamburger-menu">
            <i class="fa-solid fa-bars icon-bars"></i>
            <i class="fa-solid fa-xmark icon-close"></i>
          </button>
          <div class="nav-profile" style="display: none;">
            <ul>
              <li class="profile-dropdown">
                <img src="./image/profile-pic.png" alt="Profile Picture" class="profile-picture">
                <ul class="dropdown-menu">
                  <li><a href="#/profile/:id">Pengaturan Profil</a></li>
                  <li><button id="logoutbtn">Keluar</button></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="nav_login">
              <a href="#/login" id="loginbtn" style="display: none;">Masuk</a>
            </div>
        </div>
        </div>
      </nav>
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
    const profileDropdown = this.querySelector('.nav-profile');

    if (localStorage.getItem('isLoggedIn') === 'true') {
      loginBtn.style.display = 'none';
      profileDropdown.style.display = 'block';
    } else {
      loginBtn.style.display = 'block';
      profileDropdown.style.display = 'none';
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
    localStorage.removeItem('userId');
    window.location.hash = '#/home';
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Logout Berhasil',
      showConfirmButton: false,
      timer: 1500,
    });
    this.updateLoginState();
  }
}

customElements.define('header-bar', headerBar);
