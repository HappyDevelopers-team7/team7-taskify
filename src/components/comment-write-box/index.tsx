import { IdGroupType } from '@/types/idGroupType';
import InputComment from '../input/input-comment';
import StCommentWriteBox from './style';
import { postComment } from '@/api/postComment';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface CommentWriteBoxProps {
  idGroup: IdGroupType;
  cardId: number;
}

const CommentWriteBox = ({ idGroup, cardId }: CommentWriteBoxProps) => {
  const [commentValue, setCommentValue] = useState('');

  const queryClient = useQueryClient();
  const uploadCommentMutation = useMutation({
    mutationFn: () => postComment(commentValue, idGroup.columnId, cardId, idGroup.dashboardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
      setCommentValue('');
    },
  });

  const handleSubmitComment = () => {
    uploadCommentMutation.mutate();
  };

  return (
    <>
      <StCommentWriteBox>
        <h4>댓글</h4>
        <InputComment handleSubmit={handleSubmitComment} value={commentValue} setValue={setCommentValue} />
      </StCommentWriteBox>
    </>
  );
};

export default CommentWriteBox;
