import { IdGroupType } from '@/types/idGroupType';
import InputComment from '../input/input-comment';
import StCommentWriteBox from './style';
import { postComment } from '@/api/postComment';
import { useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface CommentWriteBoxProps {
  idGroup: IdGroupType;
  cardId: number;
}

const CommentWriteBox = ({ idGroup, cardId }: CommentWriteBoxProps) => {
  const inputRef = useRef<string | null>(null);

  const queryClient = useQueryClient();
  const uploadCommentMutation = useMutation({
    mutationFn: () => postComment(inputRef.current || '', idGroup.columnId, cardId, idGroup.dashboardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
      console.log(inputRef.current);
      inputRef.current = null;
    },
  });

  const handleSubmitComment = () => {
    uploadCommentMutation.mutate();
  };

  return (
    <>
      <StCommentWriteBox>
        <h4>댓글</h4>
        <InputComment handleSubmit={handleSubmitComment} inputRef={inputRef} />
      </StCommentWriteBox>
    </>
  );
};

export default CommentWriteBox;
