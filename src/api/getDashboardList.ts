import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const getDashboardList = async (currentPage: number) => {
  try {
    const response = await axiosInstance.get(
      `${API.DASHBOARDS.DASHBOARDS}?navigationMethod=pagination&page=${currentPage}&size=5`,
    );

    const responseData = await response.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
