export interface ColumnCardType {
  assignee: { id: number; nickname: string; profileImageUrl: string };
  columnId: number;
  createdAt: string;
  dashboardId: number;
  description: string;
  dueDate: string | null;
  id: number;
  imageUrl: string | null;
  tags: string[];
  teamId: number;
  title: string;
  updatedAt: string;
}
