import { Metadata } from 'next';

import { ResumeAnalyzer } from '@/sections/analyze/resume-analyzer';

export const metadata: Metadata = {
  title: 'تحلیل رزومه | تحلیلگر CV AI',
  description: 'رزومه خود را آپلود کنید و بازخورد هوشمند و تخصصی دریافت کنید',
};

export default function AnalyzePage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">تحلیل رزومه</h1>
        <p className="text-gray-600 dark:text-gray-300">
          رزومه خود را آپلود کنید و بازخورد هوشمند و تخصصی دریافت کنید
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <ResumeAnalyzer />
      </div>
    </section>
  );
}
