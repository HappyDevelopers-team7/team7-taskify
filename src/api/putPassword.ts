import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const PutPassword = async (password: string, newPassword: string) => {
  try {
    const response = await axiosInstance.put(API.AUTH.PASSWORD, { password, newPassword });
    const responseData = await response;

    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
