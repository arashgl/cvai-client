'use client';

import { Suspense, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Spinner } from '@heroui/react';

import LoginForm from '@/sections/auth/login-form';
import { useAuth } from '@/components/providers/auth-provider';

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/');
    }
  }, [isAuthenticated, router]);

  // Don't render the form if user is authenticated
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
