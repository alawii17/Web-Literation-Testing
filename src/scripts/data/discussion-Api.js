/* eslint-disable no-return-await */
import API_ENDPOINT from '../globals/api-endpoint';

const DiscussionApi = {
  async addDiscussion({ content }) {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      throw new Error('User belum login');
    }

    const response = await fetch(API_ENDPOINT.DISCUSSIONS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, content }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }

    return await response.json();
  },

  async getDiscussions() {
    const response = await fetch(API_ENDPOINT.DISCUSSIONS);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }
    return await response.json();
  },

  async addReply(discussionId, { content }) {
    const userId = localStorage.getItem('userId');
    const response = await fetch(API_ENDPOINT.REPLIES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ discussionId, userId, content }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }

    return await response.json();
  },

  async getReplies(discussionId) {
    const response = await fetch(`${API_ENDPOINT.REPLIES}?discussionId=${discussionId}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error);
    }
    return await response.json();
  },

  async deleteDiscussion(id) {
    const response = await fetch(`${API_ENDPOINT.DISCUSSIONS}/${id}`, {
      method: 'DELETE',
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error('Failed to delete discussion');
    }

    return response.json();
  },
};

export default DiscussionApi;
