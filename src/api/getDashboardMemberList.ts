import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const getDashboardMemberList = async (dashboardId: string, currentPage: number) => {
  try {
    const res = await axiosInstance.get(API.MEMBERS.MEMBERS, {
      params: { page: currentPage, size: 4, dashboardId: dashboardId ?? 1 }, // currentPage를 사용하여 동적으로 페이지 번호를 설정
    });
    const responseData = await res.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
