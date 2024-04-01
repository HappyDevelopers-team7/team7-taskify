import { useState } from 'react';
import ProfileImage from '../profile-image';
import StCommentReadBox from './style';
import InputComment from '../input/input-comment';
import { CommentListType } from '@/types/commentListType';
import { putComment } from '@/api/putComment';
import dateExtractor from '@/utils/dateExtractor';
import { deleteComment } from '@/api/deleteComment';
import DeleteAlert from '../modal-contents/delete-alert';
import { useDispatch, useSelector } from 'react-redux';
import { SecondModalRootState, openSecondModal, setOpenSecondModalName } from '@/redux/secondModalSlice';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface CommentReadBoxProps {
  content: CommentListType;
  commentId: number;
}

const CommentReadBox = ({ content, commentId }: CommentReadBoxProps) => {
  const dispatch = useDispatch();
  const openSecondModalName = useSelector((state: SecondModalRootState) => state.secondModal.openSecondModalName);
  const [isEditable, setIsEditable] = useState(false);
  const [editValue, setEditValue] = useState('');
  const queryClient = useQueryClient();

  const handleClickDeleteComment = async () => {
    dispatch(setOpenSecondModalName(`deleteCommentAlert${commentId}`));
    dispatch(openSecondModal(`deleteCommentAlert${commentId}`));
  };

  const deleteCommentMutation = useMutation({
    mutationFn: () => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });

  const handleDeleteComment = () => {
    deleteCommentMutation.mutate();
  };

  const handleClickEditCommentButton = () => {
    setIsEditable((prev) => !prev);
  };

  // TODO: api에서 에러처리되었을때 수정 상태가 true로 유지되도록 처리해야함. 지금은 onError에 해당 부분이 잡히지 않음
  const editCommentMutation = useMutation({
    mutationFn: () => putComment(commentId, editValue),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });

  const handleSubmitEditComment = () => {
    editCommentMutation.mutate();
  };

  return (
    <>
      <StCommentReadBox>
        <ProfileImage imageUrl={content.author.profileImageUrl} alt={`${content.author.nickname}님의 프로필 사진`} />
        <div className='comment-box'>
          <div className='comment-head'>
            <h5>{content.author.nickname}</h5>
            <span>{dateExtractor(new Date(content.updatedAt))}</span>
          </div>
          <div className='comment-body'>
            {isEditable ? (
              <InputComment
                defaultValue={content.content}
                handleSubmit={handleSubmitEditComment}
                setValue={setEditValue}
              />
            ) : (
              <p>{content.content}</p>
            )}
          </div>
          <div className='comment-foot'>
            <button type='button' onClick={handleClickDeleteComment}>
              삭제
            </button>
            <button type='button' onClick={handleClickEditCommentButton}>
              {isEditable ? '취소' : '수정'}
            </button>
          </div>
        </div>
      </StCommentReadBox>
      {openSecondModalName === `deleteCommentAlert${commentId}` ? (
        <DeleteAlert handleSubmitDelete={handleDeleteComment} />
      ) : null}
    </>
  );
};

export default CommentReadBox;
