import ModalContainer from '@/components/modal-container';
import { closeModal } from '@/redux/modalSlice';
import { useDispatch } from 'react-redux';
import StDetailModalContainer from './style';
import ColumnNameTag from '@/components/column-name-tag';
import DetailContentArea from '@/components/detail-content-area';
import DetailCommentArea from '@/components/detail-comment-area';
import { useEffect, useState } from 'react';
import { getCardDetail } from '@/api/getCardDetail';
import { cardDetailType } from '@/types/cardDetailType';
import ProfileImage from '@/components/profile-image';

const CardDetail = () => {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState<cardDetailType>();

  const handleCloseCardDetailModal = () => {
    dispatch(closeModal());
  };

  const setCardDetail = async () => {
    try {
      const result = await getCardDetail(3784);
      console.log(result);
      setDetail(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCardDetail();
  }, []);
  return (
    <ModalContainer type='detail' title={detail?.title} modalWidth={730} handleCloseModal={handleCloseCardDetailModal}>
      <StDetailModalContainer>
        <div className='content-area'>
          <div className='tag-box'>
            <ColumnNameTag name='To do' />
            <span className='divide-bar'></span>
            <div className='sub-tag-box'></div>
          </div>
          <DetailContentArea imageUrl={detail?.imageUrl} content={detail?.description} />
          <DetailCommentArea />
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
    </ModalContainer>
  );
};

export default CardDetail;
