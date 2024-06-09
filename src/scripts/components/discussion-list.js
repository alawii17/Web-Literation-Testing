import DiscussionApi from '../data/discussion-Api';

class DiscussionList extends HTMLElement {
  connectedCallback() {
    this.render();
    this.loadDiscussions();
    document.addEventListener('discussionAdded', () => this.loadDiscussions());
  }

  async loadDiscussions() {
    try {
      const discussions = await DiscussionApi.getDiscussions();
      this.renderDiscussions(discussions);
    } catch (error) {
      alert(`Gagal memuat diskusi: ${error.message}`);
    }
  }

  render() {
    this.innerHTML = '<div id="discussionList"></div>';
  }

  renderDiscussions(discussions) {
    const discussionList = this.querySelector('#discussionList');
    discussionList.innerHTML = '';
    discussions.forEach((discussion) => {
      const discussionItem = document.createElement('discussion-item');
      discussionItem.discussion = discussion;
      discussionList.appendChild(discussionItem);
    });
  }
}

customElements.define('discussion-list', DiscussionList);
