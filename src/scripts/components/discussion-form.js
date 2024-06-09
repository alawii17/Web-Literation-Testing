import DiscussionApi from '../data/discussion-Api';

class DiscussionForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <form id="discussionForm">
          <textarea id="discussionContent" placeholder="Masukkan isi diskusi..." required></textarea>
          <button id="submitForum-btn" type="submit">Submit</button>
        </form>
      `;

    this.querySelector('#discussionForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const content = this.querySelector('#discussionContent').value;
      this.addDiscussion(content);
    });
  }

  async addDiscussion(content) {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('Anda harus login terlebih dahulu untuk menambahkan diskusi.');
      return;
    }

    try {
      await DiscussionApi.addDiscussion({ userId, content });
      this.querySelector('#discussionContent').value = '';
      alert('Diskusi berhasil ditambahkan!');
      document.dispatchEvent(new Event('discussionAdded'));
    } catch (error) {
      alert(`Gagal menambahkan diskusi: ${error.message}`);
    }
  }
}

customElements.define('discussion-form', DiscussionForm);
