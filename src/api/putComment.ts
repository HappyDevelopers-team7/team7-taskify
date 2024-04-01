import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';
import { AxiosErrorMessageType } from '@/types/axiosType';
import { COMMENT_ERROR_MESSAGES, DASHBOARD_ERROR_MESSAGES } from '@/constants/message';
import { toast } from 'react-toastify';

export const putComment = async (commentId: number, content: string) => {
  try {
    const response = await axiosInstance.put(`${API.COMMENTS.COMMENTS}/${commentId}`, { content });

    return response.data;
  } catch (e) {
    const error = e as AxiosError<AxiosErrorMessageType>;
    const errorStatus = error.response?.status;
    const errorMessage = error.response?.data?.message;
    if (errorStatus === 404) {
      toast.error(DASHBOARD_ERROR_MESSAGES.NOT_A_MEMBER);
    }
    if (errorStatus === 403) {
      toast.error(COMMENT_ERROR_MESSAGES.EDIT_PERMISSION_DENIED);
    }

    toast.error(errorMessage);
    return true;
  }
};
