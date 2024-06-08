import API_ENDPOINT from '../globals/api-endpoint';

class AuthApi {
  static async register(username, email, password) {
    try {
      const response = await fetch(API_ENDPOINT.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const result = await response.json();
      console.log(result);
      if (!response.ok) {
        throw new Error(result.error || 'Failed to register');
      }
    } catch (error) {
      throw new Error(`Failed to register: ${error.message}`);
    }
  }

  static async login(email, password) {
    try {
      const response = await fetch(API_ENDPOINT.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      console.log(result);
      if (!response.ok) {
        throw new Error(result.error || 'Failed to login');
      }
    } catch (error) {
      throw new Error(`Failed to login: ${error.message}`);
    }
  }
}

export default AuthApi;
