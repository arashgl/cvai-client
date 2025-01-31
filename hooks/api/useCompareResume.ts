import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { api } from '@/utils/axios';

export const useCompareResume = () => {
  const compareResume = async (file: File, jobDescription: string) => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('jobDescription', jobDescription);

    const response = await api.post('/analyze/compare', formData);

    return response.data;
  };

  return useMutation({
    mutationFn: ({
      fileToCompare,
      jobDescription,
    }: {
      fileToCompare: File;
      jobDescription: string;
    }) => compareResume(fileToCompare, jobDescription),
    onError: (error: any) => {
      toast.error(error?.message || 'خطایی رخ داده است');
    },
  });
};
