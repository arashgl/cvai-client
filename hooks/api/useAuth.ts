import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

import { api } from '@/utils/axios';

interface AuthCredentials {
  email: string;
  password: string;
}

export const useAuth = () => {
  const router = useRouter();

  const login = useMutation({
    mutationFn: async (credentials: AuthCredentials) => {
      const { data } = await api.post('/api/auth/signin', credentials);

      return data;
    },
    onSuccess: data => {
      // Store the token in localStorage or a secure cookie
      localStorage.setItem('token', data.token);
      router.push('/analyze'); // Redirect to main page after login
    },
    onError: () => {
      toast.error('ایمیل یا رمز عبور اشتباه است');
    },
  });

  const register = useMutation({
    mutationFn: async (credentials: AuthCredentials) => {
      const { data } = await api.post('/api/auth/signup', credentials);

      return data;
    },
    onSuccess: data => {
      // Store the token in localStorage or a secure cookie
      localStorage.setItem('token', data.token);
      router.push('/analyze'); // Redirect to main page after registration
    },
    onError: () => {
      toast.error('ایمیل قبلا استفاده شده است');
    },
  });

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const isAuthenticated = () => {
    if (typeof window === 'undefined') return false;

    try {
      const decoded = jwtDecode(localStorage.getItem('token') || '');

      return !!decoded?.exp && decoded?.exp > Date.now() / 1000;
    } catch (_) {
      return false;
    }
  };

  return {
    login,
    register,
    logout,
    isAuthenticated,
  };
};
