import { Metadata } from 'next';

import { ResumeComparer } from '@/sections/compare/resume-comparer';

export const metadata: Metadata = {
  title: 'مقایسه رزومه با شغل | تحلیلگر CV AI',
  description: 'رزومه خود را با شرایط احراز شغل مقایسه کنید و میزان تناسب را بسنجید',
};

export default function ComparePage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">مقایسه رزومه با شغل</h1>
        <p className="text-gray-600 dark:text-gray-300">
          رزومه خود را با شرایط احراز شغل مقایسه کنید و میزان تناسب را بسنجید
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <ResumeComparer />
      </div>
    </section>
  );
}
