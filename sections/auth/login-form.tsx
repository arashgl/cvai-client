'use client';

import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Card, CardBody, CardHeader, Spinner } from '@heroui/react';
import { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { useAuth } from '@/components/providers/auth-provider';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, googleLogin, googleCheck } = useAuth();

  const UrlParams = useSearchParams();
  const token = UrlParams.get('token');

  useEffect(() => {
    if (token) {
      googleCheck.mutate(token);
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate({ email, password });
  };

  if (googleCheck.isPending) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-col gap-4 text-center">
        <h1 className="text-2xl font-bold">ورود به حساب کاربری</h1>
        <p className="text-gray-500">برای استفاده از امکانات سایت وارد شوید</p>
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
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button type="submit" color="primary" className="w-full" isLoading={login.isPending}>
            ورود
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
          onPress={googleLogin}
        >
          ورود با گوگل
        </Button>

        <p className="mt-4 text-center text-sm text-gray-600">
          حساب کاربری ندارید؟{' '}
          <Link href="/auth/register" className="text-primary-600 hover:underline">
            ثبت نام کنید
          </Link>
        </p>
      </CardBody>
    </Card>
  );
}
