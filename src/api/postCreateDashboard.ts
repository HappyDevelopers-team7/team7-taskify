import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const postCreateDashboard = async (title: string, color: string) => {
  try {
    const response = await axiosInstance.post(API.DASHBOARDS.DASHBOARDS, {
      color,
      title,
    });

    const responseData = await response;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
