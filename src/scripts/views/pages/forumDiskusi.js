/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import '../../components/discussion-form.js';
import '../../components/discussion-list.js';
import addForumButtonInitiator from '../../utils/addForumButton-initiator.js';

const ForumDiskusi = {
  async render() {
    return `
      <div class="forum-page">
        <button id="create-forum">Tambah Diskusi</button>
        <discussion-form></discussion-form>
        <discussion-list></discussion-list>
      </div>
    `;
  },

  async afterRender() {
    addForumButtonInitiator();
  },
};

export default ForumDiskusi;
