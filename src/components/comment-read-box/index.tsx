import { Dispatch, SetStateAction, useState } from 'react';
import ProfileImage from '../profile-image';
import StCommentReadBox from './style';
import InputComment from '../input/input-comment';
import { CommentListType } from '@/types/commentListType';
import { putComment } from '@/api/putComment';
import { toast } from 'react-toastify';
import { COMMENT_ERROR_MESSAGES, COMMENT_MESSAGES, DASHBOARD_ERROR_MESSAGES } from '@/constants/message';
import dateExtractor from '@/utils/dateExtractor';
import { deleteComment } from '@/api/deleteComment';

interface CommentReadBoxProps {
  commentList: CommentListType[];
  setCommentList: Dispatch<SetStateAction<CommentListType[]>>;
  content: CommentListType;
  commentId: number;
}

const CommentReadBox = ({ commentList, setCommentList, content, commentId }: CommentReadBoxProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editValue, setEditValue] = useState('');

  const handleClickEditComment = () => {
    setIsEditable((prev) => !prev);
  };

  const handleClickDeleteComment = async () => {
    try {
      const result = await deleteComment(commentId);
      if (result.status === 403) {
        return toast.error(COMMENT_ERROR_MESSAGES.DELETE_PERMISSION_DENIED);
      }
      if (result.status === 404) {
        return toast.error(DASHBOARD_ERROR_MESSAGES.NOT_A_MEMBER);
      }
      const updatedCommentList = commentList.filter((comment) => comment.id !== commentId);
      setCommentList(updatedCommentList);
      toast.success(COMMENT_MESSAGES.DELETE_COMMENT);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitEditComment = async () => {
    try {
      const result = await putComment(commentId, editValue);
      if (result.status === 404) {
        toast.error(DASHBOARD_ERROR_MESSAGES.NOT_A_MEMBER);
      }
      if (result.status === 403) {
        toast.error(COMMENT_ERROR_MESSAGES.EDIT_PERMISSION_DENIED);
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
      toast.success(COMMENT_MESSAGES.EDIT_COMMENT);
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
          <button type='button' onClick={handleClickEditComment}>
            {isEditable ? '취소' : '수정'}
          </button>
        </div>
      </div>
    </StCommentReadBox>
  );
};

export default CommentReadBox;
