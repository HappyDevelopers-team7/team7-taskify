import { getComments } from '@/api/getComments';
import CommentReadBox from '../comment-read-box';
import CommentWriteBox from '../comment-write-box';
import { IdGroupType } from '@/types/idGroupType';
import { useCallback, useEffect, useRef, useState } from 'react';
import { DASHBOARD_ERROR_MESSAGES } from '@/constants/message';
import { toast } from 'react-toastify';
import { CommentListType } from '@/types/commentListType';
import StCommentArea from './style';

interface DetailCommentAreaProps {
  idGroup: IdGroupType;
  cardId: number;
}

const DetailCommentArea = ({ idGroup, cardId }: DetailCommentAreaProps) => {
  const [commentList, setCommentList] = useState<CommentListType[]>([]);
  const [size, setSize] = useState(10);

  const observerTarget = useRef<HTMLDivElement>(null);
  const preventRef = useRef(true);

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      observer.disconnect();
    };
  });

  const obsHandler = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setSize((prev) => prev + 10);
    }
  };

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
      <StCommentArea>
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

        {commentList.length >= 10 && <div id='comment-observer' ref={observerTarget}></div>}
      </StCommentArea>
    </>
  );
};

export default DetailCommentArea;
