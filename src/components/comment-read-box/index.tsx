import { Dispatch, SetStateAction, useState } from 'react';
import ProfileImage from '../profile-image';
import StCommentReadBox from './style';
import InputComment from '../input/input-comment';
import { CommentListType } from '@/types/commentListType';
import { putComment } from '@/api/putComment';
import { toast } from 'react-toastify';
import { DASHBOARD_ERROR_MESSAGES } from '@/constants/message';

interface CommentReadBoxProps {
  setCommentList: Dispatch<SetStateAction<CommentListType[]>>;
  content: CommentListType;
  commentId: number;
}

const CommentReadBox = ({ setCommentList, content, commentId }: CommentReadBoxProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editValue, setEditValue] = useState('');

  const handleClickEditComment = () => {
    setIsEditable((prev) => !prev);
  };

  const handleSubmitEditComment = async () => {
    try {
      const result = await putComment(commentId, editValue);
      if (result.status === 404) {
        toast.error(DASHBOARD_ERROR_MESSAGES.NOT_A_MEMBER);
      }
      if (result.status === 403) {
        toast.error(DASHBOARD_ERROR_MESSAGES.PERMISSION_DENIED);
      }

      setCommentList((prevComments) => {
        const updatedComments = prevComments.map((comment) => {
          if (comment.id === commentId) {
            return result;
          }
          return comment;
        });
        return updatedComments;
      });
      setIsEditable(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StCommentReadBox>
      <ProfileImage imageUrl={content.author.profileImageUrl} alt={`${content.author.nickname}님의 프로필 사진`} />
      <div className='comment-box'>
        <div className='comment-head'>
          <h5>{content.author.nickname}</h5>
          <span>{content.updatedAt}</span>
        </div>
        <div className='comment-body'>
          {isEditable ? (
            <InputComment value={content.content} handleSubmit={handleSubmitEditComment} setValue={setEditValue} />
          ) : (
            <p>{content.content}</p>
          )}
        </div>
        <div className='comment-foot'>
          <button type='button'>삭제</button>
          <button type='button' onClick={handleClickEditComment}>
            {isEditable ? '취소' : '수정'}
          </button>
        </div>
      </div>
    </StCommentReadBox>
  );
};

export default CommentReadBox;
