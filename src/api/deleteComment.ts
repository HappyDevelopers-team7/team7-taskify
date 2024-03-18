import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const deleteComment = async (commentId: number) => {
  try {
    const response = await axiosInstance.delete(`${API.COMMENTS.COMMENTS}/${commentId}`);

    const responseData = await response.data;

    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
