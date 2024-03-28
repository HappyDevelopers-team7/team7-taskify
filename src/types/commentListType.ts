export interface CommentData {
  cursorId: number;
  comments: CommentListType[];
}

export interface CommentListType {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
}
