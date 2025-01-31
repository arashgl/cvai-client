import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        'iran-sans': ['var(--font-iran-sans)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#16a34a', // green-600
              foreground: '#ffffff',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#22c55e', // green-500
              foreground: '#ffffff',
            },
          },
        },
      },
    }),
  ],
};
