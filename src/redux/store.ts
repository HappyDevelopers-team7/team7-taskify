import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import myInfoReducer from './userSlice';

const rootReducer = combineReducers({
  user: myInfoReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
