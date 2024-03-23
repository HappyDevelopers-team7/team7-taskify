import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const deleteDashboard = async (dashboardId: string) => {
  try {
    const response = await axiosInstance.delete(`${API.DASHBOARDS.DASHBOARDS}/${dashboardId}`);
    const responseData = await response.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
