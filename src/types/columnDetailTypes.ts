export interface Types {
  CardInfo: {
    cards: [
      {
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
      },
    ];
    totalCount: number;
    cursorId: number;
  };
  CreateCardData: {
    asignee: string;
    title: string;
    description: string;
    dueDate: string;
    tag: string;
  };
  totalCount: number;
}
