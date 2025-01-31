import { Metadata } from 'next';

import { CoverLetterGenerator } from '@/sections/cover-letter/cover-letter-generator';

export const metadata: Metadata = {
  title: 'نگارش Cover Letter | تحلیلگر CV AI',
  description:
    'با استفاده از هوش مصنوعی، Cover Letter حرفه‌ای متناسب با موقعیت شغلی خود را بسازید.',
  keywords: [
    'Cover Letter',
    'نگارش Cover Letter',
    'هوش مصنوعی',
    'رزومه',
    'موقعیت شغلی',
    'نامه انگیزه‌نامه',
  ],
};

export default function CoverLetterPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">نگارش Cover Letter</h1>
        <p className="text-gray-600 dark:text-gray-300">
          با هوش مصنوعی، Cover Letter حرفه‌ای متناسب با موقعیت شغلی بسازید
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <CoverLetterGenerator />
      </div>
    </section>
  );
}
