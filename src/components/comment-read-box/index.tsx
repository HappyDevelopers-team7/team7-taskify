import { useState } from 'react';
import ProfileImage from '../profile-image';
import StCommentReadBox from './style';
import InputComment from '../input/input-comment';

const CommentReadBox = () => {
  const [isEditable, setIsEditable] = useState(false);

  const handleClickEditComment = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <StCommentReadBox>
      <ProfileImage imageUrl='/assets/image/logos/smallLogo.svg' />
      <div className='comment-box'>
        <div className='comment-head'>
          <h5>권밍밍</h5>
          <span>2022.12.27 14:00</span>
        </div>
        <div className='comment-body'>
          {isEditable ? <InputComment /> : <textarea readOnly value='오늘안에 CCC 까지 만들 수 있을까요?'></textarea>}
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
