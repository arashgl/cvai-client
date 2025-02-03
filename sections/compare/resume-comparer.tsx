'use client';

import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { Progress } from '@heroui/progress';
import { Textarea } from '@heroui/input';
import { useState } from 'react';
import toast from 'react-hot-toast';
import clsx from 'clsx';

import { useCompareResume } from '@/hooks/api/useCompareResume';
import { FileUpload } from '@/components/file-upload';

type ComparisonResult = {
  matchScore: number;
  summary: string;
  keyMatches: string[];
  missingSkills: string[];
  improvements: string[];
  overallFit: string;
};

export function ResumeComparer() {
  const { mutate, isPending, data } = useCompareResume();
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = async () => {
    if (!file) {
      toast.error('لطفا رزومه خود را آپلود کنید');

      return;
    }

    if (!jobDescription.trim()) {
      toast.error('لطفا شرح شغل را وارد کنید');

      return;
    }

    try {
      // Check file size
      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit
        throw new Error('حجم فایل نباید بیشتر از ۱۰ مگابایت باشد');
      }

      // Check file type
      if (!file.type.includes('pdf')) {
        throw new Error('لطفا یک فایل PDF آپلود کنید');
      }
      mutate({ fileToCompare: file, jobDescription });
    } catch (error: any) {
      toast.error(error?.message || 'خطایی در مقایسه رزومه رخ داده است');
    }
  };

  const result = data as ComparisonResult | undefined;

  return (
    <Card className="w-full max-w-3xl p-6 space-y-6 shadow-lg bg-white dark:bg-zinc-800">
      {/* Upload Section */}
      <div className="space-y-4">
        <FileUpload
          onFileSelect={setFile}
          selectedFile={file}
          accept=".pdf"
          maxSize={10 * 1024 * 1024}
          label="فایل رزومه خود را اینجا رها کنید یا کلیک کنید"
          sublabel="PDF (حداکثر ۱۰ مگابایت)"
        />

        {/* Job Description Input */}
        <div className="space-y-2">
          <label
            htmlFor="job-description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            شرح شغل
          </label>
          <Textarea
            id="job-description"
            placeholder="شرح شغل مورد نظر را وارد کنید..."
            value={jobDescription}
            onChange={e => setJobDescription(e.target.value)}
            className="min-h-[150px]"
            classNames={{
              innerWrapper: 'dark:bg-zinc-900 rounded-md p-4',
            }}
          />
        </div>

        <Button
          className="w-full"
          color="primary"
          size="lg"
          isLoading={isPending}
          isDisabled={!file || !jobDescription.trim() || isPending}
          onPress={handleSubmit}
        >
          {isPending ? 'در حال مقایسه...' : 'مقایسه رزومه'}
        </Button>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">نتایج مقایسه</h2>

          {/* Match Score */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-gray-900 dark:text-white">میزان تطابق</h3>
              <span
                className={clsx(
                  'text-lg font-bold',
                  result.matchScore >= 80
                    ? 'text-success'
                    : result.matchScore >= 50
                      ? 'text-warning'
                      : 'text-danger'
                )}
              >
                {result.matchScore}%
              </span>
            </div>
            <Progress
              value={result.matchScore}
              className="h-2"
              color={
                result.matchScore >= 80 ? 'success' : result.matchScore >= 50 ? 'warning' : 'danger'
              }
            />
          </div>

          {/* Summary */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">خلاصه تحلیل</h3>
            <p className="text-gray-600 dark:text-gray-300">{result.summary}</p>
          </div>

          {/* Matching Skills */}
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent">
            <h3 className="font-medium text-gray-900 dark:text-white">مهارت‌های منطبق</h3>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300 list-disc list-inside">
              {result.keyMatches.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Missing Skills */}
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent">
            <h3 className="font-medium text-gray-900 dark:text-white">مهارت‌های مورد نیاز</h3>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300 list-disc list-inside">
              {result.missingSkills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Improvements */}
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent">
            <h3 className="font-medium text-gray-900 dark:text-white">بهبودها</h3>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300 list-disc list-inside">
              {result.improvements.map(improvement => (
                <li key={improvement}>{improvement}</li>
              ))}
            </ul>
          </div>

          {/* Overall Fit */}
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent">
            <h3 className="font-medium text-gray-900 dark:text-white">تناسب کلی</h3>
            <p className="text-gray-600 dark:text-gray-300">{result.overallFit}</p>
          </div>
        </div>
      )}
    </Card>
  );
}
