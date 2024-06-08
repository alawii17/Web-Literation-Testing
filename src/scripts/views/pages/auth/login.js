import AuthApi from '../../../data/auth-api';
import updateNavbarAndFooterVisibility from '../../../utils/visibility-navbar&footer';

const login = {
  async render() {
    return `
      <div class="login">
            <div class="login-image">
                <div class="login-image-buttonBack">
                   <a href="#home"><i class="fa-solid fa-arrow-left"></i></a>
                </div>
                <div class="login-image-vector">
                    <img src="image/Vector-Register&login.png" alt="login">
                </div>
            </div>
            <div class="login-form">
                <h1>Log In</h1>
                <form id="LoginForm">
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
                    <button id="submitButton-login" type="submit">Masuk</button>
                    <p>Belum mempunyai akun? <a href="#/register">Daftar sekarang</a></p>
                </form>
            </div>
        </div>
      `;
  },

  async afterRender() {
    updateNavbarAndFooterVisibility();

    const loginForm = document.getElementById('LoginForm');
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        await AuthApi.login(email, password);
        alert('Login berhasil!');
        localStorage.setItem('isLoggedIn', 'true');
        document.querySelector('header-bar').updateLoginState();
        window.location.hash = '#/home';
      } catch (error) {
        alert(`Login gagal: ${error.message}`);
      }
    });
    window.onhashchange = updateNavbarAndFooterVisibility;
  },
};

export default login;
