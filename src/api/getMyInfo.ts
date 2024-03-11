import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const getMyInfo = async () => {
  try {
    const response = await axiosInstance.get(API.USER.MY_INFO);

    const responseData = await response;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
