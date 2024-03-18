import ModalContainer from '@/components/modal-container';
import { closeModal } from '@/redux/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import StDetailModalContainer from './style';
import ColumnNameTag from '@/components/column-name-tag';
import DetailContentArea from '@/components/detail-content-area';
import DetailCommentArea from '@/components/detail-comment-area';
import { useEffect, useState } from 'react';
import { getCardDetail } from '@/api/getCardDetail';
import { cardDetailType } from '@/types/cardDetailType';
import ProfileImage from '@/components/profile-image';
import LoadingSpinner from '@/components/loading-spinner';
import { IdGroupType } from '@/types/idGroupType';
import { SecondModalRootState, openSecondModal } from '@/redux/secondModalSlice';
import DeleteAlert from '../delete-alert';
import { deleteCard } from '@/api/deleteCard';

interface CardDetailProps {
  idGroup: IdGroupType;
  cardId: number;
}

const CardDetail = ({ idGroup, cardId }: CardDetailProps) => {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState<cardDetailType>();
  const [detailLoading, setDetailLoading] = useState(true);
  const openSecondModalName = useSelector((state: SecondModalRootState) => state.secondModal.openSecondModalName);

  const handleDeleteCard = async () => {
    const result = await deleteCard(cardId);
    console.log(result);
  };

  const handleCloseCardDetailModal = () => {
    dispatch(closeModal());
  };

  const handleDeleteCardDetailModal = () => {
    dispatch(openSecondModal('deleteCardAlert'));
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
        handleDeleteModal={handleDeleteCardDetailModal}
        handleCloseModal={handleCloseCardDetailModal}
      >
        {detailLoading ? (
          <LoadingSpinner />
        ) : (
          <StDetailModalContainer>
            <div className='content-area'>
              <div className='tag-box'>
                <ColumnNameTag name={idGroup.columnTitle} />
                <span className='divide-bar'></span>
                <div className='sub-tag-box'></div>
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
      {openSecondModalName === 'deleteCardAlert' ? <DeleteAlert handleSubmitDelete={handleDeleteCard} /> : null}
    </>
  );
};

export default CardDetail;
