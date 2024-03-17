import { IdGroupType } from '@/types/idGroupType';
import InputComment from '../input/input-comment';
import StCommentWriteBox from './style';
import { postComment } from '@/api/postComment';
import { Dispatch, SetStateAction, useState } from 'react';
import { CommentListType } from '@/types/commentListType';

interface CommentWriteBoxProps {
  setCommentList: Dispatch<SetStateAction<CommentListType[]>>;
  idGroup: IdGroupType;
}

const CommentWriteBox = ({ setCommentList, idGroup }: CommentWriteBoxProps) => {
  const [commentValue, setCommentValue] = useState('');
  const handleSubmitComment = async () => {
    try {
      const result = await postComment(commentValue, idGroup.columnId, idGroup.cardId, idGroup.dashboardId);
      if (result) {
        setCommentList((prevList) => [result, ...prevList]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StCommentWriteBox>
        <h4>댓글</h4>
        <InputComment handleSubmit={handleSubmitComment} setValue={setCommentValue} />
      </StCommentWriteBox>
    </>
  );
};

export default CommentWriteBox;
