import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { iranSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL('https://cvai.ir'),
  alternates: {
    canonical: '/',
    languages: {
      'fa-IR': '/fa',
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="fa" dir="rtl">
      <head />
      <body
        className={clsx(
          'min-h-screen font-sans antialiased',
          'bg-gray-50 dark:bg-zinc-900',
          iranSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <div className="relative min-h-screen">
            <Navbar />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
