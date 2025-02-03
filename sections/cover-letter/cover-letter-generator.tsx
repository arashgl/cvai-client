'use client';

import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { Textarea } from '@heroui/input';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import { HiCheck, HiClipboardCopy } from 'react-icons/hi';

import { useSubmitCoverLetter } from '@/hooks/api/useSubmitCoverLetter';
import { FileUpload } from '@/components/file-upload';

export function CoverLetterGenerator() {
  const [generatedText, setGeneratedText] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const { mutate, isPending } = useSubmitCoverLetter(chunk => {
    setGeneratedText(prev => prev + chunk);
  });

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
      setGeneratedText(''); // Reset previous content
      mutate({ fileToCompare: file, jobDescription });
    } catch (error: any) {
      toast.error(error?.message || 'خطایی در مقایسه رزومه رخ داده است');
    }
  };

  return (
    <Card className="w-full max-w-3xl p-6 space-y-6 shadow-lg bg-white dark:bg-zinc-800">
      {/* Upload Section */}
      <div className="space-y-4">
        <FileUpload
          onFileSelect={setFile}
          selectedFile={file}
          label="فایل رزومه را اینجا رها کنید یا کلیک کنید"
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
          {isPending ? 'در حال  نگارش...' : 'نگارش'}
        </Button>
      </div>

      {/* Results Section */}
      {generatedText?.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300"> نگارش انگیزه نامه</h2>
          <div className="relative">
            <div className="prose dark:prose-invert max-w-full overflow-x-auto">
              <ReactMarkdown>{generatedText}</ReactMarkdown>
            </div>
            <Button
              isIconOnly
              className="absolute top-[-50px] left-[-10px]"
              color="primary"
              onPress={() => {
                setIsCopied(false);
                navigator.clipboard.writeText(generatedText).then(() => {
                  setIsCopied(true);
                  setTimeout(() => {
                    setIsCopied(false);
                  }, 2000);
                });
              }}
            >
              <div className="relative w-[25px] h-[25px]">
                <div
                  className={`absolute inset-0 transform transition-all duration-200 ${
                    isCopied ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
                  }`}
                >
                  <HiCheck size={25} />
                </div>
                <div
                  className={`absolute inset-0 transform transition-all duration-200 ${
                    !isCopied ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
                  }`}
                >
                  <HiClipboardCopy size={25} />
                </div>
              </div>
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
