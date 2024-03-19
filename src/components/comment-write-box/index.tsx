import { IdGroupType } from '@/types/idGroupType';
import InputComment from '../input/input-comment';
import StCommentWriteBox from './style';
import { postComment } from '@/api/postComment';
import { Dispatch, SetStateAction, useState } from 'react';
import { CommentListType } from '@/types/commentListType';

interface CommentWriteBoxProps {
  setCommentList: Dispatch<SetStateAction<CommentListType[]>>;
  idGroup: IdGroupType;
  cardId: number;
}

const CommentWriteBox = ({ setCommentList, idGroup, cardId }: CommentWriteBoxProps) => {
  const [commentValue, setCommentValue] = useState('');
  const handleSubmitComment = async () => {
    try {
      const result = await postComment(commentValue, idGroup.columnId, cardId, idGroup.dashboardId);
      if (result) {
        setCommentList((prevList) => [result, ...prevList]);
        setCommentValue('');
      }
    } catch (error) {
      console.error(error);
    }
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
