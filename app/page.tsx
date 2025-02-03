import { Metadata } from 'next';
import Link from 'next/link';
import {
  HiDocumentSearch,
  HiDocumentDuplicate,
  HiCheckCircle,
  HiLightBulb,
  HiChartBar,
  HiClock,
  HiPencilAlt,
} from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'تحلیلگر CVAI | بررسی رزومه با هوش مصنوعی',
  description:
    'با استفاده از هوش مصنوعی، رزومه خود را تحلیل کنید و بازخورد حرفه‌ای دریافت کنید. بهبود رزومه با پیشنهادات هوشمند و تخصصی.',
  keywords: [
    'تحلیل رزومه',
    'بررسی رزومه',
    'هوش مصنوعی',
    'رزومه ساز',
    'بهبود رزومه',
    'CV',
    'آنالیز رزومه',
  ],
  openGraph: {
    title: 'تحلیلگر هوشمند رزومه',
    description: 'تحلیل حرفه‌ای رزومه با استفاده از هوش مصنوعی',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'تحلیلگر هوشمند رزومه',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تحلیلگر هوشمند رزومه',
    description: 'تحلیل حرفه‌ای رزومه با استفاده از هوش مصنوعی',
  },
  alternates: {
    canonical: 'https://cvai.ir',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full min-h-[70vh] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="text-center space-y-6 mb-16 max-w-4xl">
            <h1 className="text-4xl text-gray-900 dark:text-white leading-tight">
              تحلیل هوشمند رزومه با
              <span className="text-primary font-bold"> هوش مصنوعی</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              با استفاده از هوش مصنوعی پیشرفته، رزومه خود را تحلیل کنید و با موقعیت‌های شغلی مقایسه
              کنید
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
            {/* Analyze Resume Card */}
            <Link
              href="/analyze"
              className="group relative bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <HiDocumentSearch className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">تحلیل رزومه</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  رزومه خود را آپلود کنید و بازخورد هوشمند و تخصصی دریافت کنید
                </p>
              </div>
            </Link>

            {/* Compare Resume Card */}
            <Link
              href="/compare"
              className="group relative bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <HiDocumentDuplicate className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">مقایسه با شغل</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  رزومه خود را با شرایط احراز شغل مقایسه کنید و میزان تناسب را بسنجید
                </p>
              </div>
            </Link>

            {/* Cover Letter Card */}
            <Link
              href="/cover-letter"
              className="group relative bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <HiPencilAlt className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  نگارش انگیزه نامه
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  با هوش مصنوعی، Cover Letter حرفه‌ای متناسب با موقعیت شغلی بسازید
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20 px-4 bg-gray-50 dark:bg-zinc-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              مزایای استفاده از تحلیلگر هوشمند رزومه
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <HiLightBulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    تحلیل هوشمند
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  با استفاده از الگوریتم‌های پیشرفته هوش مصنوعی، رزومه شما به صورت دقیق و حرفه‌ای
                  تحلیل می‌شود
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <HiChartBar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    بهبود مستمر
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  پیشنهادات کاربردی برای بهبود رزومه و افزایش شانس موفقیت در فرصت‌های شغلی
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <HiClock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">سرعت بالا</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  در کمترین زمان ممکن، تحلیل جامع و دقیق از رزومه خود دریافت کنید
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              ویژگی‌های کلیدی
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                  <HiCheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    تحلیل ساختار و محتوا
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    بررسی دقیق ساختار رزومه، نگارش، و محتوای آن برای اطمینان از تاثیرگذاری حداکثری
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                  <HiCheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    تطبیق با نیازهای بازار کار
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    مقایسه مهارت‌ها و تجربیات با نیازهای روز بازار کار و ارائه پیشنهادات بهبود
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                  <HiCheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    پیشنهادات شخصی‌سازی شده
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    ارائه راهکارهای بهبود متناسب با تخصص و تجربه شما برای ارتقای کیفیت رزومه
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              همین حالا رزومه خود را تحلیل کنید
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              با استفاده از هوش مصنوعی، رزومه خود را به سطح بعدی ببرید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/analyze"
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                شروع تحلیل رزومه
              </Link>
              <Link
                href="/compare"
                className="px-8 py-3 bg-white dark:bg-zinc-800 text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                مقایسه با شغل
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
