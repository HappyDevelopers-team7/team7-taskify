import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const getComments = async (size: number, cardId: number) => {
  try {
    const response = await axiosInstance.get(`${API.COMMENTS.COMMENTS}?size=${size}&cardId=${cardId}`);

    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
