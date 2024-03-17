import { getComments } from '@/api/getComments';
import CommentReadBox from '../comment-read-box';
import CommentWriteBox from '../comment-write-box';
import { IdGroupType } from '@/types/idGroupType';
import { useEffect, useState } from 'react';
import { DASHBOARD_ERROR_MESSAGES } from '@/constants/message';
import { toast } from 'react-toastify';
import { CommentListType } from '@/types/commentListType';

interface DetailCommentAreaProps {
  idGroup: IdGroupType;
}

const DetailCommentArea = ({ idGroup }: DetailCommentAreaProps) => {
  const [commentList, setCommentList] = useState<CommentListType[]>([]);

  const setCommentReadBox = async () => {
    try {
      const result = await getComments(10, idGroup.cardId);
      console.log(result);
      if (result.status === 404) {
        return toast.error(DASHBOARD_ERROR_MESSAGES.NOT_A_MEMBER);
      }
      setCommentList(result.comments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCommentReadBox();
  }, []);
  return (
    <>
      <CommentWriteBox />
      {commentList.length > 0 && commentList.map((content) => <CommentReadBox key={content?.id} content={content} />)}
    </>
  );
};

export default DetailCommentArea;
