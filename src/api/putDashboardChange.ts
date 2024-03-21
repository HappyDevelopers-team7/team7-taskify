import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const putDashboardChange = async (dashboardId: string, title: string, color: string) => {
  try {
    const response = await axiosInstance.put(`${API.DASHBOARDS.DASHBOARDS}/${dashboardId}`, {
      title,
      color,
    });

    const responseData = await response;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
