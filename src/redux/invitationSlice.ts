import removeDuplicates from '@/utils/removeDuplicates';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InvitationList {
  id: number;
  inviter: {
    nickname: string;
    email: string;
    id: number;
  };
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: number;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InvitationRootState {
  invitationList: {
    initialList: InvitationList[];
    updatedList: InvitationList[];
  };
}

interface InvitationState {
  initialList: InvitationList[];
  updatedList: InvitationList[];
}

const initialState: InvitationState = {
  initialList: [],
  updatedList: [],
};

const invitationSlice = createSlice({
  name: 'invitation',
  initialState: initialState,
  reducers: {
    setInvitationList(state, action) {
      state.initialList = removeDuplicates(action.payload, 'id');
    },
    addInvitationList(state, action: PayloadAction<InvitationList>) {
      state.initialList.push(action.payload);
    },
    updateInvitationList(state, action: PayloadAction<InvitationList[]>) {
      state.updatedList = removeDuplicates(action.payload, 'id');
    },
  },
});

export const { setInvitationList, addInvitationList, updateInvitationList } = invitationSlice.actions;

export default invitationSlice.reducer;

export const filterInvitationsByTitle = (items: InvitationList[], keyword: string) => {
  const loweredKeyword = keyword.toLowerCase();
  return items.filter(({ dashboard }) => dashboard.title?.toLowerCase().includes(loweredKeyword));
};
