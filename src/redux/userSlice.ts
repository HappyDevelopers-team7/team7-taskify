import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/api/instance/axiosInstance';
import { AxiosError } from 'axios';
import API from '@/api/constants';
import store from './store';

export type AppDispatch = typeof store.dispatch;

// 로그인된 내 정보 타입 정의
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

// 초기 상태 정의했음
// 예를 들어 로그인 되었을 때 이 상태로 돌아갈 예정
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

// 비동기 처리를 여기서 해줌
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
// 프로미스 처리 순서 마다 상태를 저장한다.
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

// 이렇게 내보내 줘야 전역에서 useSelector 훅 사용해서 데이터 꺼내 쓸 수 있다.
export const getMyInfo = (state: { user: UserSliceType }) => state.user;
export const getMyInfoStatus = (state: { status: string }) => state.status;

export default userSlice.reducer;
