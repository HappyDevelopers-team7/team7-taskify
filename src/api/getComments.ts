import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';
import { SIMPLE_MESSAGES } from '@/constants/message';
import { toast } from 'react-toastify';

export const getComments = async (size: number, cardId: number) => {
  try {
    const response = await axiosInstance.get(`${API.COMMENTS.COMMENTS}?size=${size}&cardId=${cardId}`);

    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    if (error.response?.status === 401) {
      window.location.href = '/';
      return toast.error(SIMPLE_MESSAGES.UNAUTHORIZED);
    }

    return toast.error(`${SIMPLE_MESSAGES.TRY_AGAIN}: ${error.response}`);
  }
};
