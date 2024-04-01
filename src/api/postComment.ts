import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';
import { COMMENT_ERROR_MESSAGES } from '@/constants/message';
import { toast } from 'react-toastify';

interface CustomErrorData {
  message: string;
}

export const postComment = async (content: string, columnId: number, cardId: number, dashboardId: number) => {
  try {
    const response = await axiosInstance.post(`${API.COMMENTS.COMMENTS}`, {
      content,
      columnId,
      cardId,
      dashboardId,
    });

    return response.data;
  } catch (e) {
    const error = e as AxiosError<CustomErrorData>;
    const errorStatus = error.response?.status;
    const errorMessage = error.response?.data?.message;
    if (errorStatus === 400) {
      return toast.error(COMMENT_ERROR_MESSAGES.REQUIRE_COMMENT_CONTENT);
    }

    return toast.error(errorMessage);
  }
};
