/* eslint-disable no-return-await */
import API_ENDPOINT from '../globals/api-endpoint';

const AuthApi = {
  async register(username, email, password) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      throw new Error('Registrasi gagal');
    }

    return await response.json();
  },

  async login(email, password) {
    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login gagal');
    }

    return await response.json();
  },

  async addDiscussion(userId, content) {
    const response = await fetch(API_ENDPOINT.DISCUSSIONS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, content }),
    });

    if (!response.ok) {
      throw new Error('Gagal menambahkan diskusi');
    }

    return await response.json();
  },

  async getDiscussions() {
    const response = await fetch(API_ENDPOINT.DISCUSSIONS);
    if (!response.ok) {
      throw new Error('Gagal mengambil diskusi');
    }
    return await response.json();
  },

  async addReply(discussionId, userId, content) {
    const response = await fetch(API_ENDPOINT.REPLIES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ discussionId, userId, content }),
    });

    if (!response.ok) {
      throw new Error('Gagal menambahkan balasan');
    }

    return await response.json();
  },
};

export default AuthApi;
