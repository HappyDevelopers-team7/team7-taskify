import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const postSignUp = async (email: unknown, nickname: unknown, password: unknown) => {
  try {
    const response = await axiosInstance.post(API.USER.SIGN_UP, {
      email,
      nickname,
      password,
    });

    const responseData = await response;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
