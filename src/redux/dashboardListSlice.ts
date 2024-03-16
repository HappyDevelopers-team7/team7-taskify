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

export interface DashBoardRootState {
  dashboardList: {
    dashboardList: AddDashBoard[];
    sideDashboardList: AddDashBoard[];
  };
}

interface DashboardState {
  dashboardList: AddDashBoard[];
  sideDashboardList: AddDashBoard[];
}

const initialState: DashboardState = {
  dashboardList: [],
  sideDashboardList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    setDashboardList(state, action) {
      state.dashboardList = removeDuplicates(action.payload, 'id');
    },
    setSideDashboardList(state, action) {
      state.sideDashboardList = removeDuplicates(action.payload, 'id');
    },
    addDashboard(state, action: PayloadAction<AddDashBoard>) {
      state.dashboardList.push(action.payload);
    },
  },
});

export const { setDashboardList, setSideDashboardList, addDashboard } = dashboardSlice.actions;

export default dashboardSlice.reducer;
