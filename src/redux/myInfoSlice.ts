import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/api/instance/axiosInstance';
import { AxiosError } from 'axios';
import API from '@/api/constants';
import store from './store/store';

export type AppDispatch = typeof store.dispatch;

// 로그인된 내 정보 타입 정의
interface SetMyInfo {
  id: number | null;
  nickname: string;
  email: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

// 슬라이스 초기 상태 정의
interface MyInfoSliceType {
  status: string | undefined | null;
  user: SetMyInfo;
  error: unknown;
}

// 초기 상태 정의했음
// 예를 들어 로그아웃 되었을 때 이 상태로 돌아갈 예정
const initialStateValue: MyInfoSliceType = {
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
    return responseData as SetMyInfo;
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response);
  }
});

// 슬라이스 생성
// 프로미스 처리 순서 마다 상태를 저장한다.
export const myInfoSlice = createSlice({
  name: 'me',
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
// 아래 state에 우리가 만든 user를 넣어 내보내 준다.
export const getMyInfo = (state: { myInfo: MyInfoSliceType }) => state.myInfo.user;
export const getStatus = (state: { myInfo: MyInfoSliceType }) => state.myInfo.status;

export default myInfoSlice.reducer;
