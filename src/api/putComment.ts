import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const putComment = async (commentId: number, content: string) => {
  try {
    const response = await axiosInstance.put(`${API.COMMENTS.COMMENTS}/${commentId}`, { content });

    const responseData = await response.data;

    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
