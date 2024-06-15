import API_ENDPOINT from '../globals/api-endpoint';

const TestApi = {
  async getQuestions() {
    try {
      const response = await fetch(API_ENDPOINT.QUESTIONS);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Failed to fetch questions:', error);
      throw error;
    }
  },
};

export default TestApi;
