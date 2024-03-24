import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

const deleteDashboardInvite = async (dashboardId: string, invitationId: number) => {
  try {
    const response = await axiosInstance.delete(
      `${API.DASHBOARDS.DASHBOARDS}/${dashboardId}/invitations/${invitationId}`,
    );
    const responseData = await response.data;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
export default deleteDashboardInvite;
