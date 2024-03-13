import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const getInvitation = async () => {
  try {
    const response = await axiosInstance.get(API.INVITATIONS.INVITATIONS);

    const responseData = await response.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
