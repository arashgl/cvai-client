import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/api/v1',
});

// Add request interceptor to include bearer token
api.interceptors.request.use(
  config => {
    // Get token from localStorage
    const token = localStorage.getItem('token');

    // If token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle 401 errors
api.interceptors.response.use(
  response => response,
  error => {
    const isAuthRoute = ['/auth'].some(route => error.config.url?.includes(route));

    // If it's a 401 error and not an auth route
    if (error.response?.status === 401 && !isAuthRoute) {
      // Clear token
      localStorage.removeItem('token');

      // Redirect to index page
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);
