import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import myInfoReducer from './userSlice';

const rootReducer = combineReducers({
  user: myInfoReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // 아래 코드는 redux dev tools를 사용할 수 있게 해주는 코드라 삭제하면 안됨.
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
