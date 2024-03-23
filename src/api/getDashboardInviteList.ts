import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

const getDashboardInviteList = async (dashboardId: string, currentPage: number) => {
  try {
    const response = await axiosInstance.get(`${API.DASHBOARDS.DASHBOARDS}/${dashboardId}/invitations`, {
      params: { page: currentPage, size: 5, dashboardId: dashboardId ?? 1 }, // currentPage를 사용하여 동적으로 페이지 번호를 설정
    });
    const responseData = await response.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};

export default getDashboardInviteList;
