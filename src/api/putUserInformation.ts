import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const PutUserInformation = async (email: string, nickname: string) => {
  try {
    const response = await axiosInstance.put(`${API.USER.MY_INFO}`, {
      email,
      nickname,
    });

    const responseData = await response.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
