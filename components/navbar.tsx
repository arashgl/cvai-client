'use client';

import { Button } from '@heroui/button';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown';
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from '@heroui/navbar';
import { MoonIcon, SunIcon } from '@heroui/shared-icons';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useAuth } from './providers/auth-provider';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAction = (action: () => void) => {
    setIsMenuOpen(false);
    action();
  };

  const renderNavItems = () => {
    if (!mounted) {
      return (
        <div className="flex items-center gap-4">
          <div className="w-24 h-8 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
          <div className="w-24 h-8 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
        </div>
      );
    }

    if (isAuthenticated) {
      return (
        <>
          <NavbarItem>
            <Button
              as={Link}
              href="/services/analyze"
              variant="light"
              size="sm"
              onPress={() => setIsMenuOpen(false)}
            >
              آنالیز رزومه
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="/services/compare"
              variant="light"
              size="sm"
              onPress={() => setIsMenuOpen(false)}
            >
              مقایسه رزومه
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="/services/cover-letter"
              variant="light"
              size="sm"
              onPress={() => setIsMenuOpen(false)}
            >
              نامه انگیزه‌نامه
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-600"
              onPress={() => handleAction(logout)}
            >
              خروج
            </Button>
          </NavbarItem>
        </>
      );
    }

    return (
      <>
        <NavbarItem>
          <Button
            as={Link}
            href="/auth/login"
            variant="light"
            size="sm"
            onPress={() => setIsMenuOpen(false)}
          >
            ورود
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/auth/register"
            variant="solid"
            size="sm"
            onPress={() => setIsMenuOpen(false)}
          >
            ثبت نام
          </Button>
        </NavbarItem>
      </>
    );
  };

  return (
    <HeroNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900 backdrop-blur-md"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={'/brand/logo-letter.webp'}
              className="dark:invert"
              alt="CvAi"
              width={80}
              height={30}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {renderNavItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
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
            ) : (
              <div className="w-5 h-5 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
            )}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>{renderNavItems()}</NavbarMenu>
    </HeroNavbar>
  );
}
