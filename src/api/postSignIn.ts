import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const postSignIn = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(API.AUTH.LOGIN, {
      email,
      password,
    });

    const responseData = await response;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    if (error.response?.status) {
      return error.response;
    }
  }
};
