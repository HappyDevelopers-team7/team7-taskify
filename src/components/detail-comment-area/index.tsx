import { getComments } from '@/api/getComments';
import CommentReadBox from '../comment-read-box';
import CommentWriteBox from '../comment-write-box';
import { IdGroupType } from '@/types/idGroupType';
import { useCallback, useEffect, useState } from 'react';
import { DASHBOARD_ERROR_MESSAGES } from '@/constants/message';
import { toast } from 'react-toastify';
import { CommentListType } from '@/types/commentListType';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

interface DetailCommentAreaProps {
  idGroup: IdGroupType;
  cardId: number;
}

const DetailCommentArea = ({ idGroup, cardId }: DetailCommentAreaProps) => {
  const [commentList, setCommentList] = useState<CommentListType[]>([]);
  const [size, setSize] = useState(10);

  const loadMoreData = async () => {
    const result = await getComments(size, cardId);
    setCommentList((prevData) => [...prevData, ...result]);
    setSize((prevPage) => prevPage + 10);
  };
  const [sentinelRef, isFetching] = useInfiniteScroll<HTMLDivElement>(loadMoreData);

  const setCommentReadBox = useCallback(async () => {
    try {
      const result = await getComments(size, cardId);
      if (result.status === 404) {
        return toast.error(DASHBOARD_ERROR_MESSAGES.NOT_A_MEMBER);
      }
      setCommentList(result.comments);
    } catch (error) {
      console.error(error);
    }
  }, [cardId, setCommentList, size]);

  useEffect(() => {
    setCommentReadBox();
  }, [setCommentReadBox]);

  return (
    <>
      <CommentWriteBox idGroup={idGroup} cardId={cardId} setCommentList={setCommentList} />
      {commentList.length > 0 &&
        commentList.map((content) => (
          <CommentReadBox
            key={content?.id}
            commentId={content?.id}
            content={content}
            commentList={commentList}
            setCommentList={setCommentList}
          />
        ))}

      {commentList.length >= 10 && <div id='comment-observer' ref={sentinelRef}></div>}
      {isFetching && <div>loading...</div>}
    </>
  );
};

export default DetailCommentArea;
