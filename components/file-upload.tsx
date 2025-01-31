'use client';

import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { HiOutlineDocumentArrowUp } from 'react-icons/hi2';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  accept?: string;
  maxSize?: number; // in bytes
  className?: string;
  label?: string;
  sublabel?: string;
}

export function FileUpload({
  onFileSelect,
  selectedFile,
  accept = '.pdf',
  maxSize = 10 * 1024 * 1024, // 10MB default
  className = '',
  label = 'Drop file here or click to upload',
  sublabel = 'PDF (Max 10MB)',
}: FileUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      validateAndSetFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];

    if (file) {
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    try {
      // Check file size
      if (file.size > maxSize) {
        throw new Error(`File size should not exceed ${maxSize / (1024 * 1024)}MB`);
      }

      // Check file type
      const fileType = file.type.toLowerCase();
      const acceptedTypes = accept.split(',').map(type => type.trim().toLowerCase());

      if (
        !acceptedTypes.some(
          type => fileType.includes(type.replace('.', '')) || fileType === type || type === '*'
        )
      ) {
        throw new Error(`Please upload a ${accept} file`);
      }

      onFileSelect(file);
    } catch (error: any) {
      toast.error(error?.message || 'Error uploading file');
    }
  };

  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg transition-colors ${
        selectedFile
          ? 'border-primary bg-primary/5'
          : 'border-gray-300 dark:border-gray-700 bg-transparent'
      } cursor-pointer hover:border-primary ${className}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => ref.current?.click()}
      onKeyDown={e => e.key === 'Enter' && ref.current?.click()}
      role="button"
      tabIndex={0}
    >
      <input
        ref={ref}
        type="file"
        className="hidden z-[-1]"
        accept={accept}
        id="file-upload"
        onChange={handleFileChange}
      />
      <HiOutlineDocumentArrowUp className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {selectedFile ? selectedFile.name : label}
      </p>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{sublabel}</p>
    </div>
  );
}
