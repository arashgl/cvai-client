'use client';

import { Button } from '@heroui/button';
import { MoonIcon, SunIcon } from '@heroui/shared-icons';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-zinc-900 backdrop-blur-md z-50">
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

        <Button
          variant="ghost"
          size="sm"
          className="text-gray-700 dark:text-gray-300"
          onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? (
            <MoonIcon className="h-5 w-5 transition-all" />
          ) : (
            <SunIcon className="h-5 w-5 transition-all" />
          )}
        </Button>
      </nav>
    </header>
  );
}
