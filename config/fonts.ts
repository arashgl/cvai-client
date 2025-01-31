import localFont from 'next/font/local';

export const iranSans = localFont({
  src: [
    {
      path: '../public/fonts/iran-sans//IRANSansX-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/iran-sans//IRANSansX-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/iran-sans/IRANSansX-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/iran-sans/IRANSansX-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/iran-sans/IRANSansX-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/iran-sans/IRANSansX-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-iran-sans',
});
