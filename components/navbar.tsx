'use client';

import { Button } from '@heroui/button';
import { MoonIcon, SunIcon } from '@heroui/shared-icons';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useAuth } from '@/hooks/api/useAuth';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="top-0 w-full border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900 backdrop-blur-md z-50">
      <nav className="h-16 px-4 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-lg">
          <Link href="/">
            <Image
              src={'/brand/logo-letter.webp'}
              className="dark:invert"
              alt="CvAi"
              width={80}
              height={30}
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {isAuthenticated() ? (
            <>
              <Link href="/analyze">
                <Button variant="light" size="sm">
                  آنالیز رزومه
                </Button>
              </Link>
              <Link href="/compare">
                <Button variant="light" size="sm">
                  مقایسه رزومه
                </Button>
              </Link>
              <Link href="/cover-letter">
                <Button variant="light" size="sm">
                  نامه انگیزه‌نامه
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="text-red-600" onPress={logout}>
                خروج
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="light" size="sm">
                  ورود
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button variant="solid" size="sm">
                  ثبت نام
                </Button>
              </Link>
            </>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="text-gray-700 dark:text-gray-300"
            onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {mounted ? (
              theme === 'light' ? (
                <MoonIcon className="h-5 w-5 transition-all" />
              ) : (
                <SunIcon className="h-5 w-5 transition-all" />
              )
            ) : null}
          </Button>
        </div>
      </nav>
    </header>
  );
}
