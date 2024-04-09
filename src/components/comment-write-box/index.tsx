import { IdGroupType } from '@/types/idGroupType';
import InputComment from '../input/input-comment';
import StCommentWriteBox from './style';
import { postComment } from '@/api/postComment';
import { LegacyRef, useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface CommentWriteBoxProps {
  idGroup: IdGroupType;
  cardId: number;
}

const CommentWriteBox = ({ idGroup, cardId }: CommentWriteBoxProps) => {
  const inputRef: LegacyRef<HTMLTextAreaElement> = useRef(null);

  const queryClient = useQueryClient();
  const uploadCommentMutation = useMutation({
    // react query 요청 보낼때 inputRef.current 값을 넣어 보낸다.
    mutationFn: () => postComment(inputRef.current?.value || '', idGroup.columnId, cardId, idGroup.dashboardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
      if (inputRef.current) {
        inputRef.current.value = '';
      }
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
