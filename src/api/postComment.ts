import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const postComment = async (content: string, columnId: number, cardId: number, dashboardId: number) => {
  try {
    const response = await axiosInstance.post(`${API.COMMENTS.COMMENTS}`, {
      content,
      columnId,
      cardId,
      dashboardId,
    });

    const responseData = await response.data;

    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
