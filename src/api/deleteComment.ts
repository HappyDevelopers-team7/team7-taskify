import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';
import { AxiosErrorMessageType } from '@/types/axiosType';
import { toast } from 'react-toastify';
import { COMMENT_ERROR_MESSAGES, DASHBOARD_ERROR_MESSAGES } from '@/constants/message';

export const deleteComment = async (commentId: number) => {
  try {
    const response = await axiosInstance.delete(`${API.COMMENTS.COMMENTS}/${commentId}`);

    return response.data;
  } catch (e) {
    const error = e as AxiosError<AxiosErrorMessageType>;
    const errorStatus = error.response?.status;
    const errorMessage = error.response?.data?.message;
    if (errorStatus === 403) {
      return toast.error(COMMENT_ERROR_MESSAGES.DELETE_PERMISSION_DENIED);
    }
    if (errorStatus === 404) {
      return toast.error(DASHBOARD_ERROR_MESSAGES.NOT_A_MEMBER);
    }
    return toast.error(errorMessage);
  }
};
