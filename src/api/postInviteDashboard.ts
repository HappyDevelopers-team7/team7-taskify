import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const postInviteDashboard = async (email: string, dashboardId: string) => {
  try {
    const res = await axiosInstance.post(`${API.DASHBOARDS.DASHBOARDS}/${dashboardId}/invitations`, {
      email,
    });
    const resData = await res;
    return resData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
