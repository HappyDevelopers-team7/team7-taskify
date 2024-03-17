import { useState } from 'react';
import ProfileImage from '../profile-image';
import StCommentReadBox from './style';
import InputComment from '../input/input-comment';
import { CommentListType } from '@/types/commentListType';

interface CommentReadBoxProps {
  content: CommentListType;
}

const CommentReadBox = ({ content }: CommentReadBoxProps) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleClickEditComment = () => {
    setIsEditable((prev) => !prev);
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
          {isEditable ? <InputComment readonly={false} value={content.content} /> : <p>{content.content}</p>}
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
