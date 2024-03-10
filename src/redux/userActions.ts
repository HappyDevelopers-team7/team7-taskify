// userActions.js

import API from '@/api/constants';
import { login, logout } from './userSlice';
import axiosInstance from '@/api/instance/axiosInstance';

export const checkUserOnReload = () => async (dispatch, getState) => {
  const accessToken = getState().user.accessToken;

  if (accessToken) {
    try {
      // 토큰을 사용하여 서버에서 사용자 정보 가져오기
      const response = await axiosInstance.get(API.USER.MY_INFO, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const responseData = response.data;

      // 가져온 사용자 정보를 리덕스 스토어에 저장
      dispatch(login(responseData));
    } catch (error) {
      console.error('유저 데이터 받아오는데 실패하였습니다.: ', error);
      dispatch(logout());
    }
  }
};
