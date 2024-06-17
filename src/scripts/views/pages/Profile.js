/* eslint-disable import/no-extraneous-dependencies */
import Swal from 'sweetalert2';
import AuthApi from '../../data/auth-api';

const ProfilePage = {
  async render() {
    try {
      const userId = localStorage.getItem('userId');
      const userProfile = await AuthApi.getProfile(userId);

      return `
        <div class="wrapper">
          <div class="profile-card">
            <h2 class="profile-title">Profile Detail</h2>
            <form id="profileForm" class="profile-form">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" value="${userProfile.username}" required>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value="${userProfile.email}" required>
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" value="${userProfile.password}" required>
              </div>

              <button type="submit" class="submit-button">Update Profile</button>
            </form>
          </div>
        </div>
      `;
    } catch (error) {
      console.error('Failed to render profile page:', error);
      return '<p class="error-message">Failed to load profile data. Please try again later.</p>';
    }
  },

  async afterRender() {
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
      profileForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const profileData = {
          username: document.getElementById('username').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        };

        try {
          const userId = localStorage.getItem('userId');
          await AuthApi.updateProfile(userId, profileData);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Profile berhasil diperbaharui',
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Profile gagal diperbaharui',
            showConfirmButton: false,
            timer: 1500,
          });
          console.error('Error updating profile:', error);
        }
      });
    }
  },
};

export default ProfilePage;
