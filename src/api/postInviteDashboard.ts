import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';
import { toast } from 'react-toastify';

export const postInviteDashboard = async (email: string, dashboardId: string) => {
  try {
    const res = await axiosInstance.post(`${API.DASHBOARDS.DASHBOARDS}/${dashboardId}/invitations`, {
      email,
    });
    console.log(res);
    const resData = await res;
    return resData;
  } catch (e) {
    const error = e as AxiosError;
    if (error.response && error.response.status === 404) {
      toast.error('존재하지 않는 email 입니다.');
      return;
    }
    return error.response;
  }
};
