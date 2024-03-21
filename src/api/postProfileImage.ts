import { AxiosError } from 'axios';
import API from './constants';
import axiosInstance from './instance/axiosInstance';

export const PostProfileImage = async (profileImageFormData: FormData) => {
  try {
    const response = await axiosInstance.post(API.USER.UPLOAD_IMAGE, { profileImageFormData });

    const responseData = await response;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};
