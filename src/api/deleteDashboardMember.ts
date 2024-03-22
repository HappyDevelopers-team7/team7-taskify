import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const deleteDashboardMember = async (memberId: number) => {
  try {
    const response = await axiosInstance.delete(`${API.MEMBERS.MEMBERS}/${memberId}`);
    const responseData = await response.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
