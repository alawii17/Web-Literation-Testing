/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
import Swal from 'sweetalert2';
import DiscussionApi from '../data/discussion-Api';

class DiscussionForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <form id="discussionForm">
        <textarea id="discussionContent" placeholder="Masukkan isi diskusi..." required></textarea>
        <span id="error-message" style="color: red; display: none;">Isi diskusi tidak boleh kosong!</span>
        <button id="submitForum-btn" type="submit">Submit</button>
      </form>
    `;

    this.querySelector('#discussionForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const content = this.querySelector('#discussionContent').value.trim();
      if (!this.validateContent(content)) {
        this.showErrorMessage(true);
        return;
      }
      this.addDiscussion(content);
    });

    this.querySelector('#discussionContent').addEventListener('input', (event) => {
      const content = event.target.value.trim();
      if (this.validateContent(content)) {
        this.showErrorMessage(false);
      } else {
        this.showErrorMessage(true);
      }
    });
  }

  validateContent(content) {
    return content.length > 0;
  }

  showErrorMessage(show) {
    const errorMessage = this.querySelector('#error-message');
    if (show) {
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
    }
  }

  async addDiscussion(content) {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Anda harus login terlebih dahulu',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    try {
      await DiscussionApi.addDiscussion({ userId, content });
      this.querySelector('#discussionContent').value = '';
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Diskusi berhasil ditambahkan',
        showConfirmButton: false,
        timer: 1500,
      });
      document.dispatchEvent(new Event('discussionAdded'));
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Gagal menambahkan diskusi : ${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}

customElements.define('discussion-form', DiscussionForm);
