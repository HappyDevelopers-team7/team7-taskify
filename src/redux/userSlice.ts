import { createSlice } from '@reduxjs/toolkit';

type LoginUserInfo = {
  id: number;
  nickname: string;
  email: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

const initialStateValue: LoginUserInfo = {
  id: 0,
  email: '',
  nickname: '',
  profileImageUrl: null,
  createdAt: '',
  updatedAt: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
