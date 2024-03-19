// modalSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from './store/store';

export type SecondModalRootState = ReturnType<typeof store.getState>;

export interface SecondModalState {
  openSecondModalName: string | null;
  prevSecondScrollPosition: number;
  currentSecondScrollPosition: number;
}

const initialState: SecondModalState = {
  openSecondModalName: null,
  prevSecondScrollPosition: 0,
  currentSecondScrollPosition: 0,
};

/**
 * 모달을 전역으로 관리해 준다.
 * openSecondModal - 인자로 모달의 이름을 string으로 넘겨주면 해당 모달이 열림
 * closeSecondModal - openSecondModal할 때 들어온 모달 이름을 없애줌
 * setPrevSecondScrollPosition, setCurrentSecondScrollPosition - 모달이 열린 위치를 체크해서 해당 위치에 멈춰있을 수 있도록
 */
const secondModalSlice = createSlice({
  name: 'secondModal',
  initialState,
  reducers: {
    setOpenSecondModalName: (state, action: PayloadAction<string>) => {
      state.openSecondModalName = action.payload;
    },
    openSecondModal: (state, action: PayloadAction<string>) => {
      state.currentSecondScrollPosition = state.prevSecondScrollPosition;
      state.openSecondModalName = action.payload;
    },
    closeSecondModal: (state) => {
      state.openSecondModalName = null;
    },
  },
});

export const { setOpenSecondModalName, openSecondModal, closeSecondModal } = secondModalSlice.actions;
export default secondModalSlice.reducer;
