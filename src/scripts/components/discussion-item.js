/* eslint-disable max-len */
/* eslint-disable camelcase */
import DiscussionApi from '../data/discussion-Api';

class DiscussionItem extends HTMLElement {
  set discussion(discussion) {
    this._discussion = discussion;
    this.render();
  }

  render() {
    const {
      username, created_at, content,
    } = this._discussion;
    const formattedDate = new Date(created_at).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    this.innerHTML = `
  <div class="discussion-item">
    <div class="discussion-header">
      <img src="./image/profile-pic.png" alt="User Icon" class="user-icon">
      <div class="user-info">
        <span class="discussion-username">${username}</span>
        <span class="discussion-date">${formattedDate}</span>
      </div>
    </div>
    <div class="discussion-content">${content}</div>
    <button class="reply-button">Balas</button>
    <button class="toggle-replies-button">Lihat Balasan</button>
    <button class="delete-replies-button">Hapus</button>
    <div class="reply-form-container" style="display: none;"></div>
    <div class="replies" style="display: none;"></div>
  </div>
`;

    this.querySelector('.reply-button').addEventListener('click', () => {
      this.toggleReplyForm();
    });

    this.querySelector('.toggle-replies-button').addEventListener('click', () => {
      this.toggleReplies();
    });

    this.querySelector('.delete-replies-button').addEventListener('click', () => {
      this.deleteDiscussion();
    });
  }

  toggleReplyForm() {
    const replyFormContainer = this.querySelector('.reply-form-container');
    const isHidden = replyFormContainer.style.display === 'none';

    if (isHidden) {
      this.showReplyForm();
    } else {
      replyFormContainer.style.display = 'none';
    }
  }

  showReplyForm() {
    const replyFormContainer = this.querySelector('.reply-form-container');
    replyFormContainer.style.display = 'block';

    replyFormContainer.innerHTML = '';

    const replyForm = document.createElement('form');
    replyForm.innerHTML = `
      <textarea placeholder="Masukkan balasan..." required></textarea>
      <button type="submit">Kirim</button>
    `;

    replyForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const content = replyForm.querySelector('textarea').value;
      try {
        await this.addReply(content);
        replyForm.reset(); // Reset form setelah berhasil menambahkan balasan
      } catch (error) {
        alert(`Gagal menambahkan balasan: ${error.message}`);
      }
    });

    replyFormContainer.appendChild(replyForm);
  }

  async addReply(content) {
    try {
      await DiscussionApi.addReply(this._discussion.id, { content });
      alert('Balasan berhasil ditambahkan!');
      this.loadReplies();
    } catch (error) {
      alert(`Gagal menambahkan balasan: ${error.message}`);
    }
  }

  async loadReplies() {
    try {
      const replies = await DiscussionApi.getReplies(this._discussion.id);
      this.renderReplies(replies);
    } catch (error) {
      alert(`Gagal memuat balasan: ${error.message}`);
    }
  }

  renderReplies(replies) {
    const repliesContainer = this.querySelector('.replies');
    repliesContainer.innerHTML = '';
    replies.forEach((reply) => {
      const replyItem = document.createElement('div');
      replyItem.className = 'reply-item';
      replyItem.innerHTML = `
        <div class="reply-header">
          <img src="./image/profile-pic.png" alt="User Icon" class="user-icon">
          <div class="user-info">
            <span class="reply-username">${reply.username}</span>
            <span class="reply-date">${new Date(reply.created_at).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}</span>
          </div>
        </div>
        <div class="reply-content">${reply.content}</div>
      `;
      repliesContainer.appendChild(replyItem);
    });
  }

  toggleReplies() {
    const repliesContainer = this.querySelector('.replies');
    const toggleButton = this.querySelector('.toggle-replies-button');
    const isHidden = repliesContainer.style.display === 'none';

    if (isHidden) {
      this.loadReplies();
      repliesContainer.style.display = 'block';
      toggleButton.textContent = 'Tutup Balasan';
    } else {
      repliesContainer.style.display = 'none';
      toggleButton.textContent = 'Lihat Balasan';
    }
  }

  async deleteDiscussion() {
    const currentUserId = localStorage.getItem('userId');

    // Memeriksa apakah pengguna saat ini adalah pemilik diskusi
    const isOwner = currentUserId === this._discussion.user_id.toString(); // Mengonversi user_id menjadi string

    // Menampilkan pesan kesalahan jika pengguna bukan pemilik diskusi
    if (!isOwner) {
      alert('Anda tidak memiliki izin untuk menghapus diskusi ini.');
      return;
    }

    if (confirm('Apakah Anda yakin ingin menghapus diskusi ini?')) {
      try {
        await DiscussionApi.deleteDiscussion(this._discussion.id);
        alert('Diskusi berhasil dihapus!');
        this.remove();
      } catch (error) {
        alert(`Gagal menghapus diskusi: ${error.message}`);
      }
    }
  }
}

customElements.define('discussion-item', DiscussionItem);
