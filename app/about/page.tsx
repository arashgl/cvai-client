import { Metadata } from 'next';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'درباره ما | تحلیلگر CVAI',
  description: 'درباره پروژه تحلیلگر هوشمند رزومه و تیم توسعه‌دهنده آن',
};

export default function About() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            درباره <span className="text-primary">تحلیلگر هوشمند رزومه</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            پروژه‌ای برای کمک به بهبود رزومه‌های حرفه‌ای با استفاده از هوش مصنوعی
          </p>
        </div>
      </section>

      {/* About Project Section */}
      <section className="w-full py-10 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              درباره پروژه
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                تحلیلگر هوشمند رزومه یک پروژه متن‌باز است که با هدف کمک به افراد در بهبود رزومه‌های
                خود توسعه یافته است. این پروژه با استفاده از الگوریتم‌های پیشرفته هوش مصنوعی،
                رزومه‌ها را تحلیل کرده و پیشنهادات کاربردی ارائه می‌دهد.
              </p>
              <p>
                این پروژه به صورت رایگان در دسترس عموم قرار دارد و هدف آن کمک به افراد جویای کار در
                ارتقای کیفیت رزومه‌های خود است.
              </p>
            </div>
          </div>

          {/* Mission Statement Section */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              ماموریت ما
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg">هدف اصلی ما کمک به شما در سه زمینه کلیدی است:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>بهینه‌سازی و ارتقای کیفیت رزومه</li>
                <li>نگارش انگیزه‌نامه‌های حرفه‌ای و تاثیرگذار</li>
                <li>تحلیل تطابق رزومه با شرح شغل (Job Description) مورد نظر</li>
              </ul>
            </div>
          </div>

          {/* Key Capabilities Section */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              قابلیت‌های کلیدی سیستم
            </h2>
            <div className="space-y-4">
              <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-50 dark:bg-zinc-900 p-4 md:p-6 rounded-lg">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                    تحلیل هوشمند
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    تحلیل هوشمند رزومه و ارائه پیشنهادات بهبود
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-zinc-900 p-4 md:p-6 rounded-lg">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                    تولید انگیزه‌نامه
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    تولید انگیزه‌نامه‌های شخصی‌سازی شده متناسب با موقعیت شغلی
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-zinc-900 p-4 md:p-6 rounded-lg">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                    مقایسه دقیق
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    مقایسه دقیق مهارت‌ها و تجربیات با نیازمندی‌های شغلی
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-zinc-900 p-4 md:p-6 rounded-lg">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                    گزارش تطابق
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    ارائه گزارش تطابق و پیشنهادات برای افزایش شانس پذیرش
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-zinc-900 p-4 md:p-6 rounded-lg md:col-span-2">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                    راهنمایی و بهبود
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    راهنمایی در جهت تقویت نقاط ضعف رزومه
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              ویژگی‌های اصلی
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300">
              <li>تحلیل هوشمند ساختار و محتوای رزومه</li>
              <li>مقایسه رزومه با موقعیت‌های شغلی</li>
              <li>ارائه پیشنهادات بهبود شخصی‌سازی شده</li>
              <li>تولید خودکار Cover Letter با هوش مصنوعی</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-10 md:py-16 px-4 bg-gray-50 dark:bg-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
            ارتباط با ما
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <a
              href="https://linkedin.com/in/arashgl98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-[#0077b5]" />
              <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/arashgl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <FaGithub className="w-5 h-5 md:w-6 md:h-6 text-gray-900 dark:text-white" />
              <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">GitHub</span>
            </a>
            <a
              href="mailto:arash.golrokhian98@gmail.com"
              className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <HiMail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">ایمیل</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
