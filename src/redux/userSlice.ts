import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/api/instance/axiosInstance';
import { AxiosError } from 'axios';
import API from '@/api/constants';
import store from './store';

export type AppDispatch = typeof store.dispatch;

// 유저 정보 타입 정의
interface SetUserType {
  id: number | null;
  nickname: string;
  email: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

// 슬라이스 초기 상태 정의
interface UserSliceType {
  status: string | undefined | null;
  user: SetUserType;
  error: unknown;
}

const initialStateValue: UserSliceType = {
  status: null,
  user: {
    id: null,
    email: '',
    nickname: '',
    profileImageUrl: null,
    createdAt: '',
    updatedAt: '',
  },
  error: null,
};

// 비동기 액션을 위한 thunk 생성
export const fetchMyInfo = createAsyncThunk('user/fetchUserInformation', async () => {
  try {
    const response = await axiosInstance.get(API.USER.MY_INFO);
    const responseData = await response.data;
    return responseData as SetUserType;
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response);
  }
});

// 슬라이스 생성
export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateValue,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMyInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMyInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchMyInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
// 선택자 함수 추가
export const getMyInfo = (state: { user: UserSliceType }) => state.user;

// 기존 코드
export default userSlice.reducer;
