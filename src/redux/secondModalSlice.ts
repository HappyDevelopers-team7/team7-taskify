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
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${state.prevSecondScrollPosition}px`;
      document.body.style.overflowY = 'scroll';
      state.openSecondModalName = action.payload;
    },
    closeSecondModal: (state) => {
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.overflowY = '';
      window.scrollTo(0, state.currentSecondScrollPosition);
      state.openSecondModalName = null;
    },
    setPrevSecondScrollPosition: (state, action: PayloadAction<number>) => {
      state.prevSecondScrollPosition = action.payload;
    },
    setCurrentSecondScrollPosition: (state, action: PayloadAction<number>) => {
      state.currentSecondScrollPosition = action.payload;
    },
  },
});

export const {
  setOpenSecondModalName,
  openSecondModal,
  closeSecondModal,
  setPrevSecondScrollPosition,
  setCurrentSecondScrollPosition,
} = secondModalSlice.actions;
export default secondModalSlice.reducer;
