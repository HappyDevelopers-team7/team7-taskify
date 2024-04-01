import CommentReadBox from '../comment-read-box';
import CommentWriteBox from '../comment-write-box';
import { IdGroupType } from '@/types/idGroupType';
import { useEffect, useRef, useState } from 'react';
import { CommentListType } from '@/types/commentListType';
import StCommentArea from './style';
import useCommentQuery from '@/queries/useCommentQuery';

interface DetailCommentAreaProps {
  idGroup: IdGroupType;
  cardId: number;
}

const DetailCommentArea = ({ idGroup, cardId }: DetailCommentAreaProps) => {
  const [size, setSize] = useState(10);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const { commentData } = useCommentQuery(size, cardId);

  const commentArray: CommentListType[] = commentData?.comments || [];

  const observerTarget = useRef<HTMLDivElement>(null);
  const preventLoadRef = useRef(true);

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
    if (target.isIntersecting && preventLoadRef.current) {
      preventLoadRef.current = false;
      setSize((prev) => prev + 10);
      setCursorId(cursorId); // TODO : 리액트 쿼리 무한 스크롤할 때 수정필요함
    }
  };

  return (
    <>
      <StCommentArea>
        <CommentWriteBox idGroup={idGroup} cardId={cardId} />
        {commentArray.length > 0
          ? commentArray.map((comment) => (
              <CommentReadBox key={comment?.id} commentId={comment?.id} content={comment} />
            ))
          : null}

        {commentArray.length >= 10 && cursorId !== null && <div id='comment-observer' ref={observerTarget}></div>}
      </StCommentArea>
    </>
  );
};

export default DetailCommentArea;
