import removeDuplicates from '@/utils/removeDuplicates';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddDashBoard {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

export interface RootState {
  dashboardList: {
    dashboardList: AddDashBoard[];
  };
}

interface DashboardState {
  dashboardList: AddDashBoard[];
}

const initialState: DashboardState = {
  dashboardList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    setDashboardList(state, action) {
      state.dashboardList = removeDuplicates(action.payload, 'id');
    },
    addDashboard(state, action: PayloadAction<AddDashBoard>) {
      state.dashboardList.push(action.payload);
    },
  },
});

export const { setDashboardList, addDashboard } = dashboardSlice.actions;

export default dashboardSlice.reducer;
