/* eslint-disable import/no-extraneous-dependencies */
import Swal from 'sweetalert2';
import AuthApi from '../../../data/auth-api';
import updateNavbarAndFooterVisibility from '../../../utils/visibility-navbar&footer';

const register = {
  async render() {
    return `
      <div class="register">
        <div class="register-form">
          <h1>Sign Up</h1>
          <form id="registerForm">
            <div class="input-wrapper">
              <label for="name">Username</label>
              <input 
                type="text" 
                id="name"
                placeholder="Masukan name disini" required
                aria-describedby="usernameError">
              <div id="usernameError" class="error-message"></div>
            </div>
            <div class="input-wrapper">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email"
                placeholder="Masukan email disini" required
                aria-describedby="emailError">
              <div id="emailError" class="error-message"></div>
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input 
                type="password"
                id="password"
                placeholder="********"
                minlength="8" required
                aria-describedby="passwordError">
              <div id="passwordError" class="error-message"></div>
            </div>
            <button id="submitButton-register" type="submit">Daftar</button>
          </form>
          <p>Sudah mempunyai akun? <a href="#/login">Masuk disini</a></p>
        </div>
        <div class="register-image">
          <div class="login-image-vector">
            <img src="image/Vector-Register&login.png" alt="register">
          </div>
        </div>
        <div class="register-image-buttonBack">
          <a href="#/home"><i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    `;
  },

  async afterRender() {
    updateNavbarAndFooterVisibility();

    const registerForm = document.getElementById('registerForm');
    const usernameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    const validatePassword = (password) => password.length >= 8;

    const validateUsername = (username) => username.trim().length > 0;

    usernameInput.addEventListener('input', () => {
      if (!validateUsername(usernameInput.value)) {
        usernameError.textContent = 'Username tidak boleh kosong';
      } else {
        usernameError.textContent = '';
      }
    });

    emailInput.addEventListener('input', () => {
      if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Email tidak valid';
      } else {
        emailError.textContent = '';
      }
    });

    passwordInput.addEventListener('input', () => {
      if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password harus minimal 8 karakter';
      } else {
        passwordError.textContent = '';
      }
    });

    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = usernameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;

      let valid = true;

      if (!validateUsername(username)) {
        usernameError.textContent = 'Username tidak boleh kosong';
        valid = false;
      }

      if (!validateEmail(email)) {
        emailError.textContent = 'Email tidak valid';
        valid = false;
      }

      if (!validatePassword(password)) {
        passwordError.textContent = 'Password harus minimal 8 karakter';
        valid = false;
      }

      if (!valid) {
        return;
      }

      try {
        await AuthApi.register(username, email, password);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registrasi Berhasil',
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem('isLoggedIn', 'true');
        document.querySelector('header-bar').updateLoginState();
        window.location.hash = '#/login';
      } catch (error) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Registrasi Gagal',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    window.onhashchange = updateNavbarAndFooterVisibility;
  },
};

export default register;
