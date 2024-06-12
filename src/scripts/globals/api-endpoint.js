import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/register`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
  DISCUSSIONS: `${CONFIG.BASE_URL}/forumdiskusi`,
  DELETE_DISCUSSION: (id) => `${CONFIG.BASE_URL}/forumdiskusi/${id}`,
  REPLIES: `${CONFIG.BASE_URL}/replies`,
};

export default API_ENDPOINT;
