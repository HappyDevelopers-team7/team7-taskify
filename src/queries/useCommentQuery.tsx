import { getComments } from '@/api/getComments';
import { CommentData } from '@/types/commentListType';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useCommentQuery = (size: number, cardId: number) => {
  const {
    isLoading: isCommentLoading,
    isError: isCommentError,
    data: commentData,
    isSuccess: isCommentSuccess,
    isPending: isCommentPending,
  } = useQuery<CommentData, AxiosError>({
    queryKey: ['comments', size, cardId],
    queryFn: () => getComments(size, cardId),
    placeholderData: keepPreviousData,
  });

  return { isCommentLoading, isCommentError, commentData, isCommentSuccess, isCommentPending };
};

export default useCommentQuery;
