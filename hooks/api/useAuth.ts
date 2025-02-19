import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';

import { api } from '@/utils/axios';

export interface AuthCredentials {
  email: string;
  password: string;
}

export const useAuthHook = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      if (typeof window === 'undefined') return false;

      try {
        const decoded = jwtDecode(localStorage.getItem('token') || '');

        return !!decoded?.exp && decoded?.exp > Date.now() / 1000;
      } catch (_) {
        return false;
      }
    };

    setIsAuthenticated(checkAuth());
  }, []);

  const login = useMutation({
    mutationFn: async (credentials: AuthCredentials) => {
      const { data } = await api.post('/auth/login', credentials);

      return data;
    },
    onSuccess: data => {
      // Store the token in localStorage or a secure cookie
      localStorage.setItem('token', data.token);
      setIsAuthenticated(true);
      router.push('/services/analyze'); // Redirect to main page after login
    },
    onError: () => {
      toast.error('ایمیل یا رمز عبور اشتباه است');
    },
  });

  const register = useMutation({
    mutationFn: async (credentials: AuthCredentials) => {
      const { data } = await api.post('/auth/register', credentials);

      return data;
    },
    onSuccess: data => {
      // Store the token in localStorage or a secure cookie
      localStorage.setItem('token', data.token);
      setIsAuthenticated(true);
      router.push('/services/analyze'); // Redirect to main page after registration
    },
    onError: () => {
      toast.error('ایمیل قبلا استفاده شده است');
    },
  });

  const googleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/google`;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return {
    login,
    register,
    googleLogin,
    logout,
    isAuthenticated,
  };
};
