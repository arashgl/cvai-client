'use client';

import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { Textarea } from '@heroui/input';
import { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import { HiCheck, HiClipboardCopy } from 'react-icons/hi';

import { useSubmitCoverLetter } from '@/hooks/api/useSubmitCoverLetter';
import { FileUpload } from '@/components/file-upload';
import styles from './cover-letter.module.css';

// Helper function to detect Persian/Arabic text
const containsPersian = (text: string) => {
  const persianPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return persianPattern.test(text);
};

export function CoverLetterGenerator() {
  const [generatedText, setGeneratedText] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isRTL, setIsRTL] = useState(false);
  const textQueueRef = useRef<string[]>([]);
  const isProcessingRef = useRef(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const { mutate, isPending } = useSubmitCoverLetter(chunk => {
    textQueueRef.current.push(chunk);
    processNextChunk();
  });

  const processNextChunk = async () => {
    if (isProcessingRef.current || textQueueRef.current.length === 0) return;

    isProcessingRef.current = true;
    const chunk = textQueueRef.current.shift() || '';

    // Update text direction based on content
    setIsRTL(containsPersian(chunk));

    // Process chunk letter by letter
    const letters = chunk.split('');

    for (let i = 0; i < letters.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 5));
      setGeneratedText(prev => prev + letters[i]);
    }

    isProcessingRef.current = false;

    if (textQueueRef.current.length > 0) {
      processNextChunk();
    }
  };

  useEffect(() => {
    const animateText = async () => {
      setDisplayedText(generatedText);

      // Smooth scroll to bottom when new content is added
      if (resultRef.current) {
        resultRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    };
    animateText();
  }, [generatedText]);

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
        <div className={`space-y-4 ${styles['animate-fade-in']}`} ref={resultRef}>
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300">نگارش انگیزه نامه</h2>
          <div className="relative">
            <div
              className={`prose dark:prose-invert max-w-full overflow-x-auto transition-all duration-200 ease-in-out ${
                styles['content-container']
              }`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div
                className={`${styles['typing-animation']} ${isRTL ? styles['rtl'] : styles['ltr']}`}
              >
                <ReactMarkdown>{displayedText}</ReactMarkdown>
              </div>
            </div>
            <Button
              isIconOnly
              className="absolute top-[-50px] left-[-10px] transition-transform duration-200 hover:scale-105"
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
