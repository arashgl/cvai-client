import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { api } from '@/utils/axios';

export const useSubmitCoverLetter = (onChunk: (chunk: string) => void) => {
  const generateCoverLetter = async (file: File, jobDescription: string) => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('jobDescription', jobDescription);

    let buffer = '';
    const response = await api.post('/cover-letter', formData, {
      responseType: 'text',
      onDownloadProgress: progressEvent => {
        const response = progressEvent.event.target.response || '';
        const newContent = response.slice(buffer.length);

        buffer = response;

        if (newContent) {
          const cleanedContent = newContent.replace(/```/g, '').replace(/markdown/g, '');

          onChunk(cleanedContent);
        }
      },
    });

    return response.data;
  };

  return useMutation({
    mutationFn: ({
      fileToCompare,
      jobDescription,
    }: {
      fileToCompare: File;
      jobDescription: string;
    }) => generateCoverLetter(fileToCompare, jobDescription),
    onError: (error: any) => {
      toast.error(error?.message || 'خطایی رخ داده است');
    },
  });
};
