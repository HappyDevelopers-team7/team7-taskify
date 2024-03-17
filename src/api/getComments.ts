import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const getComments = async (size: number, cardId: number) => {
  try {
    const response = await axiosInstance.get(`${API.COMMENTS.COMMENTS}?size=${size}&cardId=${cardId}`);

    const responseData = await response.data;

    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
