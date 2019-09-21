import axios from 'axios';

function getToken() {
  const token = localStorage.getItem('session_token');
  return token;
}

const baseApiAddress = 'http://localhost:port';

const instance = axios.create({
  baseURL: baseApiAddress,
  headers: {
    'Content-Type': 'application/json',
    'session-token': getToken(),
  },
});

instance.interceptors.request.use(
  (config) => {
    if (config.baseURL === baseApiAddress && !config.headers.session_token) {
      const ses_token = getToken();

      if (ses_token) {
        // eslint-disable-next-line no-param-reassign
        config.headers['session-token'] = ses_token;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
