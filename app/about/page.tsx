import { title } from '@/components/primitives';

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>درباره ما</h1>
      <p className="text-gray-600 dark:text-gray-300">
        تحلیلگر هوشمند رزومه یک ابزار آسان و سریع برای تحلیل رزومه‌ها با استفاده از هوش مصنوعی است.
        این ابزار به شما اجازه می‌دهد تا رزومه‌های خود را به صورت آسان و سریع تحلیل کنید و
        پیشنهاداتی برای بهبود رزومه‌ها ارائه دهد.
      </p>
    </div>
  );
}
