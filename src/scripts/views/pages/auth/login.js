/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import Swal from 'sweetalert2';
import AuthApi from '../../../data/auth-api';
import updateNavbarAndFooterVisibility from '../../../utils/visibility-navbar&footer';

const login = {
  async render() {
    return `
      <div class="login">
        <div class="login-image">
          <div class="login-image-vector">
            <img src="image/Vector-Register&login.png" alt="login">
          </div>
        </div>
        <div class="login-image-buttonBack">
          <a href="#home"><i class="fa-solid fa-arrow-left"></i></a>
        </div>
        <div class="login-form">
          <h1>Log In</h1>
          <form id="LoginForm">
            <div class="input-wrapper">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email"
                placeholder="Masukan email disini" 
                required 
                aria-describedby="emailError">
              <div id="emailError" class="error-message"></div>
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input 
                type="password"
                id="password"
                placeholder="********"
                minlength="8" 
                required 
                aria-describedby="passwordError">
              <div id="passwordError" class="error-message"></div>
            </div>
            <button id="submitButton-login" type="submit">Masuk</button>                    
          </form>
          <p>Belum mempunyai akun? <a href="#/register">Daftar sekarang</a></p>
        </div>
      </div>
    `;
  },

  async afterRender() {
    updateNavbarAndFooterVisibility();

    const loginForm = document.getElementById('LoginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    const validatePassword = (password) => password.length >= 8;

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

    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = emailInput.value;
      const password = passwordInput.value;

      let valid = true;

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
        const { user } = await AuthApi.login(email, password);
        localStorage.setItem('userId', user.id);
        localStorage.setItem('isLoggedIn', 'true');
        document.querySelector('header-bar').updateLoginState();
        window.location.hash = '#/home';
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Berhasil',
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'my-swal',
          },
        });
      } catch (error) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Login Gagal',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    window.onhashchange = updateNavbarAndFooterVisibility;
  },
};

export default login;
