export interface cardDetailType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    id: number;
    nickname: string;
    profileImageUrl: string;
  };
  imageUrl: null;
  teamId: string;
  columnId: number;
  dashboardId: number;
  createdAt: string;
  updatedAt: string;
}
