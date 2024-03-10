import { createSlice } from '@reduxjs/toolkit';

interface LoginUserInfo {
  accessToken: string;
  user: {
    id: number | null;
    nickname: string;
    email: string;
    profileImageUrl: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

const initialStateValue: LoginUserInfo = {
  accessToken: '',
  user: {
    id: null,
    email: '',
    nickname: '',
    profileImageUrl: null,
    createdAt: '',
    updatedAt: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateValue,
  reducers: {
    login: (state, action) => {
      return { ...state, ...action.payload };
    },
    logout: () => {
      return initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
