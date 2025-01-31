'use client';

import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { Progress } from '@heroui/progress';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { useSubmitAnalyze } from '@/hooks/api/useSubmitAnalyze';
import { FileUpload } from '@/components/file-upload';

type AnalysisResult = {
  summary: string;
  score: number;
  improvements: string[];
  suggestions: string[];
};

export function ResumeAnalyzer() {
  const { mutate, isPending, data } = useSubmitAnalyze();
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async () => {
    if (!file) return;

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

      mutate(file);
    } catch (error: any) {
      toast.error(error?.message || 'خطایی در تحلیل رزومه رخ داده است');
    }
  };

  const result = data as AnalysisResult | undefined;

  return (
    <Card className="w-full max-w-3xl p-6 space-y-6 shadow-lg bg-white dark:bg-gray-800">
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

        <Button
          className="w-full"
          color="primary"
          size="lg"
          isLoading={isPending}
          isDisabled={!file || isPending}
          onPress={handleSubmit}
        >
          {isPending ? 'در حال تحلیل...' : 'تحلیل رزومه'}
        </Button>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">نتایج تحلیل</h2>

          {/* Summary Section */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">خلاصه تحلیل</h3>
            <p className="text-gray-600 dark:text-gray-300">{result.summary}</p>
          </div>

          {/* Score Section */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-gray-900 dark:text-white">امتیاز رزومه شما</h3>
              <span className="text-lg font-bold text-primary">{result.score}/100</span>
            </div>
            <Progress
              value={result.score}
              className="h-2"
              color={result.score >= 80 ? 'success' : result.score >= 50 ? 'warning' : 'danger'}
            />
          </div>

          {/* Improvements Section */}
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent">
            <h3 className="font-medium text-gray-900 dark:text-white">موارد نیازمند بهبود</h3>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300 list-disc list-inside">
              {result.improvements.map(improvement => (
                <li key={improvement}>{improvement}</li>
              ))}
            </ul>
          </div>

          {/* Suggestions Section */}
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent">
            <h3 className="font-medium text-gray-900 dark:text-white">پیشنهادات</h3>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300 list-disc list-inside">
              {result.suggestions.map(suggestion => (
                <li key={suggestion}>{suggestion}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  );
}
