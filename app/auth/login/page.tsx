'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import LoginForm from '@/sections/auth/login-form';
import { useAuth } from '@/components/providers/auth-provider';

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, googleCheck } = useAuth();
  const UrlParams = useSearchParams();
  const token = UrlParams.get('token');

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (token) {
      googleCheck.mutate(token);
    }
  }, [token]);

  // Don't render the form if user is authenticated
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <LoginForm />
    </div>
  );
}
