'use client';

import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Card, CardBody, CardHeader } from '@heroui/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

import { useAuthHook } from '@/hooks/api/useAuth';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const { register } = useAuthHook();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordsMatch(false);

      return;
    }
    setPasswordsMatch(true);
    register.mutate({ email, password });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!passwordsMatch) {
      setPasswordsMatch(e.target.value === confirmPassword || confirmPassword === '');
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);

    if (!passwordsMatch) {
      setPasswordsMatch(e.target.value === password || e.target.value === '');
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-col gap-4 text-center">
        <h1 className="text-2xl font-bold">ایجاد حساب کاربری</h1>
        <p className="text-gray-500">برای استفاده از امکانات سایت ثبت نام کنید</p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            label="ایمیل"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            label="رمز عبور"
            value={password}
            onChange={handlePasswordChange}
            required
            color={!passwordsMatch ? 'danger' : 'default'}
          />
          <Input
            type="password"
            label="تکرار رمز عبور"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            color={!passwordsMatch ? 'danger' : 'default'}
            description={!passwordsMatch ? 'رمز عبور و تکرار آن یکسان نیستند' : undefined}
          />
          <Button type="submit" color="primary" className="w-full" isLoading={register.isPending}>
            ثبت نام
          </Button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span suppressHydrationWarning className="bg-white dark:bg-zinc-900 px-2 text-gray-500">
              یا
            </span>
          </div>
        </div>

        <Button
          className="w-full"
          variant="bordered"
          startContent={<FcGoogle className="text-xl" />}
        >
          ثبت نام با گوگل
        </Button>

        <p className="mt-4 text-center text-sm text-gray-600">
          قبلاً ثبت نام کرده‌اید؟{' '}
          <Link href="/auth/login" className="text-primary-600 hover:underline">
            وارد شوید
          </Link>
        </p>
      </CardBody>
    </Card>
  );
}
