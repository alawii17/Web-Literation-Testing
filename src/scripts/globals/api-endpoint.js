import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/register`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
  DISCUSSIONS: `${CONFIG.BASE_URL}/forumdiskusi`,
  DELETE_DISCUSSION: (id) => `${CONFIG.BASE_URL}/forumdiskusi/${id}`,
  REPLIES: `${CONFIG.BASE_URL}/replies`,
  QUESTIONS: `${CONFIG.BASE_URL}/testliteration`,
  PROFILE: (id) => `${CONFIG.BASE_URL}/profile/${id}`,
};

export default API_ENDPOINT;
