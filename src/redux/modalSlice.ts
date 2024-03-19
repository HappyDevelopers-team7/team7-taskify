// modalSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from './store/store';

export type ModalRootState = ReturnType<typeof store.getState>;

export interface ModalState {
  openModalName: string | null;
  prevScrollPosition: number;
  currentScrollPosition: number;
}

const initialState: ModalState = {
  openModalName: null,
  prevScrollPosition: 0,
  currentScrollPosition: 0,
};

/**
 * 모달을 전역으로 관리해 준다.
 * openModal - 인자로 모달의 이름을 string으로 넘겨주면 해당 모달이 열림
 * closeModal - openModal할 때 들어온 모달 이름을 없애줌
 * setPrevScrollPosition, setCurrentScrollPosition - 모달이 열린 위치를 체크해서 해당 위치에 멈춰있을 수 있도록
 */
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenModalName: (state, action: PayloadAction<string>) => {
      state.openModalName = action.payload;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.currentScrollPosition = state.prevScrollPosition;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${state.prevScrollPosition}px`;
      document.body.style.overflowY = 'scroll';
      state.openModalName = action.payload;
    },
    closeModal: (state) => {
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.overflowY = '';
      window.scrollTo(0, state.currentScrollPosition);
      state.openModalName = null;
    },
    setPrevScrollPosition: (state, action: PayloadAction<number>) => {
      state.prevScrollPosition = action.payload;
    },
    setCurrentScrollPosition: (state, action: PayloadAction<number>) => {
      state.currentScrollPosition = action.payload;
    },
  },
});

export const { setOpenModalName, openModal, closeModal, setPrevScrollPosition, setCurrentScrollPosition } =
  modalSlice.actions;
export default modalSlice.reducer;
