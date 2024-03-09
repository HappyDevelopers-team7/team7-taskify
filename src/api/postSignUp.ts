import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const postSignUp = async (email: string, nickname: string, password: string) => {
  try {
    const response = await axiosInstance.post(API.USER.SIGN_UP, {
      email,
      nickname,
      password,
    });

    const responseData = await response;
    console.log(responseData);
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    if (error.response?.status) {
      return error.response?.status;
    }
  }
};
