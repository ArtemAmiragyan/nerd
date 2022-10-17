import axios from 'axios';
import { getCookie } from 'typescript-cookie';
import { BEARER } from '@/constants/cookie-keys';

const instance = axios.create({
  baseURL: '/api/',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${getCookie(BEARER)}`,
    common: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  },
});

instance.interceptors.request.use((config) => {
  const csrfToken = getCookie('XSRF-TOKEN');

  if (!csrfToken) {
    return instance.get('sanctum/csrf-cookie');
  }

  instance.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

  return config;
});

export default instance;
