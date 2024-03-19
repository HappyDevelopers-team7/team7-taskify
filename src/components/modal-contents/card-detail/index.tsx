import ModalContainer from '@/components/modal-container';
import { closeModal } from '@/redux/modalSlice';
import { useDispatch } from 'react-redux';
import StDetailModalContainer from './style';
import DetailContentArea from '@/components/detail-content-area';
import DetailCommentArea from '@/components/detail-comment-area';
import { useEffect, useState } from 'react';
import { getCardDetail } from '@/api/getCardDetail';
import { cardDetailType } from '@/types/cardDetailType';
import ProfileImage from '@/components/profile-image';
import LoadingSpinner from '@/components/loading-spinner';
import { IdGroupType } from '@/types/idGroupType';
import { openSecondModal, setOpenSecondModalName } from '@/redux/secondModalSlice';
import TagComponent from '@/components/tag-component';
import { makeRandomBackgroundColor } from '@/utils/makeRandomBackgroundColor';
import ColumnNameTag from '@/components/column-name-tag';

interface CardDetailProps {
  idGroup: IdGroupType;
  cardId: number;
}

const CardDetail = ({ idGroup, cardId }: CardDetailProps) => {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState<cardDetailType>();
  const [detailLoading, setDetailLoading] = useState(true);

  const handleCloseCard = () => {
    dispatch(closeModal());
  };

  const handleDeleteCard = () => {
    dispatch(setOpenSecondModalName(`deleteCardAlert${cardId}`));
    dispatch(openSecondModal(`deleteCardAlert${cardId}`));
  };

  const setCardDetail = async () => {
    try {
      setDetailLoading(true);
      const result = await getCardDetail(cardId);
      setDetail(result);
    } catch (error) {
      setDetailLoading(false);
      console.error(error);
    } finally {
      setDetailLoading(false);
    }
  };

  useEffect(() => {
    setCardDetail();
  }, []);

  return (
    <>
      <ModalContainer
        type='detail'
        title={detail?.title}
        modalWidth={730}
        handleDeleteModal={handleDeleteCard}
        handleCloseModal={handleCloseCard}
      >
        {detailLoading ? (
          <LoadingSpinner />
        ) : (
          <StDetailModalContainer>
            <div className='content-area'>
              <div className='tag-box'>
                <div className='column-name-box'>
                  <ColumnNameTag name={idGroup.columnTitle} />
                </div>
                <span className='divide-bar'></span>
                <div className='sub-tag-box'>
                  {detail?.tags &&
                    detail?.tags.map((tag, index) => (
                      <TagComponent key={index} name={tag} backgroundColor={makeRandomBackgroundColor(index)} />
                    ))}
                </div>
              </div>
              <DetailContentArea imageUrl={detail?.imageUrl} content={detail?.description} />
              <DetailCommentArea idGroup={idGroup} cardId={cardId} />
            </div>
            <div className='information-area'>
              <ul className='information-box'>
                <li>
                  <p>담당자</p>
                  <div className='desc'>
                    <ProfileImage
                      imageUrl={detail?.assignee.profileImageUrl || null}
                      alt={`${detail?.assignee.nickname}님의 프로필 이미지`}
                    />
                    <span>{detail?.assignee.nickname}</span>
                  </div>
                </li>
                <li>
                  <p>마감일</p>
                  <div className='desc'>
                    <span>{detail?.dueDate}</span>
                  </div>
                </li>
              </ul>
            </div>
          </StDetailModalContainer>
        )}
      </ModalContainer>
    </>
  );
};

export default CardDetail;
