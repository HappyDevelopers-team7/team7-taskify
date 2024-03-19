import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import myInfoReducer from '../myInfoSlice';
import modalReducer from '../modalSlice';
import secondModalReducer from '../secondModalSlice';
import dashboardListReducer from '../dashboardListSlice';
import invitationListReducer from '../invitationSlice';

const rootReducer = combineReducers({
  myInfo: myInfoReducer,
  modal: modalReducer,
  secondModal: secondModalReducer,
  dashboardList: dashboardListReducer,
  invitationList: invitationListReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // 아래 코드는 redux dev tools를 사용할 수 있게 해주는 코드라 삭제하면 안됨.
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
