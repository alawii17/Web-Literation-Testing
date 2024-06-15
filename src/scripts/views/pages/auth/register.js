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
    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        await AuthApi.register(username, email, password);
        alert('Registrasi berhasil!');
        localStorage.setItem('isLoggedIn', 'true');
        document.querySelector('header-bar').updateLoginState();
        window.location.hash = '#/login';
      } catch (error) {
        alert(`Registrasi gagal: ${error.message}`);
      }
    });
    window.onhashchange = updateNavbarAndFooterVisibility;
  },
};

export default register;
