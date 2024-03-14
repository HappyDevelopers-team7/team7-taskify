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

export interface RootState {
  invitationList: {
    invitations: InvitationList[];
  };
}

interface InvitationState {
  invitations: InvitationList[];
}

const initialState: InvitationState = {
  invitations: [],
};

const invitationSlice = createSlice({
  name: 'invitation',
  initialState: initialState,
  reducers: {
    setInvitationList(state, action) {
      state.invitations = action.payload;
    },
    addInvitationList(state, action: PayloadAction<InvitationList>) {
      state.invitations.push(action.payload);
    },
  },
});

export const { setInvitationList, addInvitationList } = invitationSlice.actions;

export default invitationSlice.reducer;
