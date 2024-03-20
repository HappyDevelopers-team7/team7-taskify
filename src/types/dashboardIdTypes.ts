export interface dashboardIdTypes {
  Columns: {
    createdAt: string;
    dashboardId: number;
    id: number;
    teamId: string;
    title: string;
    updatedAt: string;
  };
  Members: {
    createdAt: string;
    email: string;
    id: number;
    isOwner: true;
    nickname: string;
    profileImageUrl: string | undefined;
    updatedAt: string;
    userId: number;
  };
  Tag: {
    id: number;
    name: string;
    backgroundColor: string;
    color: string;
  };
}
