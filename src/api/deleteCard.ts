import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const deleteCard = async (cardId: number) => {
  try {
    const response = await axiosInstance.delete(`${API.CARDS.CARDS}/${cardId}`);

    const responseData = await response.data;
    console.log(responseData);
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
