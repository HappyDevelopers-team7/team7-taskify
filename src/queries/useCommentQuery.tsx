import { getComments } from '@/api/getComments';
import { CommentData } from '@/types/commentListType';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useCommentQuery = (size: number, cardId: number) => {
  const {
    isLoading: isCommentLoading,
    isError: isCommentError,
    data: commentData,
    isSuccess,
  } = useQuery<CommentData, AxiosError>({
    queryKey: ['comments', size, cardId],
    queryFn: () => getComments(size, cardId),
  });

  return { isCommentLoading, isCommentError, commentData, isSuccess };
};

export default useCommentQuery;
