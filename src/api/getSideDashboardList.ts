import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const getSideDashboardList = async (currentPage: number) => {
  try {
    const response = await axiosInstance.get(
      `${API.DASHBOARDS.DASHBOARDS}?navigationMethod=pagination&page=${currentPage}&size=18`,
    );

    const responseData = await response.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
