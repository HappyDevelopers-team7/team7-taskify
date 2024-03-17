import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const getInvitation = async (size = 10) => {
  try {
    const response = await axiosInstance.get(`${API.INVITATIONS.INVITATIONS}?size=${size}`);

    const responseData = await response.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
