'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/components/providers/auth-provider';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/auth/login');
    }
  }, [isAuthenticated, router]);

  // Don't render anything if user is not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
