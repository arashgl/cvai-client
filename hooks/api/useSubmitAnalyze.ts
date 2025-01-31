import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { api } from '@/utils/axios';

export const useSubmitAnalyze = () => {
  const analyzeResume = async (file: File, images?: string[]) => {
    const formData = new FormData();

    formData.append('file', file);
    if (images && images.length > 0) {
      formData.append('images', JSON.stringify(images));
    }
    const response = await api.post('/analyze', formData);

    return response.data;
  };

  return useMutation({
    mutationFn: (fileToAnalyze: File) => analyzeResume(fileToAnalyze),
    onError: (error: any) => {
      toast.error(error?.message || 'خطایی در تحلیل رزومه رخ داده است');
    },
  });
};
