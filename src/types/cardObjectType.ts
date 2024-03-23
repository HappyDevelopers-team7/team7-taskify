import { dashboardIdTypes } from './dashboardIdTypes';

export type CardObjectType = {
  card: {
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
  };
  columns: dashboardIdTypes['Columns'][];
  thisColumn: dashboardIdTypes['Columns'];
  memberData: dashboardIdTypes['Members'][];
  viewCards: (columnId: number) => void;
};
