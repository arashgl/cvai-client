import { Button } from '@heroui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          صفحه مورد نظر پیدا نشد
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
        </p>
        <div className="pt-6">
          <Button as={Link} href="/" variant="solid" size="lg">
            بازگشت به صفحه اصلی
          </Button>
        </div>
      </div>
    </div>
  );
}
