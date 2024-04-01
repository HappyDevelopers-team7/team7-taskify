import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';
import { SIMPLE_MESSAGES } from '@/constants/message';

export const getComments = async (size: number, cardId: number) => {
  try {
    const response = await axiosInstance.get(`${API.COMMENTS.COMMENTS}?size=${size}&cardId=${cardId}`);

    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    if (error.response?.status === 401) {
      alert(SIMPLE_MESSAGES.UNAUTHORIZED);
    } else {
      alert(`${SIMPLE_MESSAGES.TRY_AGAIN}: ${error.response}`);
    }

    return (window.location.href = '/');
  }
};
