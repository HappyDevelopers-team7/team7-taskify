import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const getDashboardInfo = async (dashboardId: string) => {
  try {
    const response = await axiosInstance.get(`${API.DASHBOARDS.DASHBOARDS}/${dashboardId}`);
    const responseData = await response.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
