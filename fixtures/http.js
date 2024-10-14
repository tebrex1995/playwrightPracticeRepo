export const URLS = {
  BASE_URL: 'https://automaticityacademy.ngrok.app',
};

export const ENDPOINTS = {
  REGISTER_ENDPOINT: '/register',
  LOGIN_ENDPOINT: '/login',
  CUSTOMERS_ENDPOINT: '/customers',
};

export const API = {
  BASE_API: 'https://automaticityacademy.ngrok.app/api/v1',
};

export const API_ENDPOINTS = {
  API_LOGIN: `${API['BASE_API']}/auth${ENDPOINTS['LOGIN_ENDPOINT']}`,
  API_CUSTOMER: `${API['BASE_API']}${ENDPOINTS['CUSTOMERS_ENDPOINT']}`,
};
