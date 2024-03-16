import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const putInviteAccepted = async (inviteAccepted: boolean, invitationId: number) => {
  try {
    const response = await axiosInstance.put(`${API.INVITATIONS.INVITATIONS}/${invitationId}`, {
      inviteAccepted,
    });

    const responseData = await response;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
