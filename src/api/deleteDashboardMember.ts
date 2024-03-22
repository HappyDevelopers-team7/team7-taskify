import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';
import { toast } from 'react-toastify';

export const deleteDashboardMember = async (memberId: number) => {
  try {
    const response = await axiosInstance.delete(`${API.MEMBERS.MEMBERS}/${memberId}`);
    if (response.status === 200) {
      toast.success('삭제가 완료 되었습니다.');
      const responseData = await response.data;
      return responseData;
    }
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
