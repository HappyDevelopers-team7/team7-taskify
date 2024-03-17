import ModalContainer from '@/components/modal-container';
import { closeModal } from '@/redux/modalSlice';
import { useDispatch } from 'react-redux';
import StDetailModalContainer from './style';
import ColumnNameTag from '@/components/column-name-tag';

const CardDetail = () => {
  const dispatch = useDispatch();

  const handleCloseCardDetailModal = () => {
    dispatch(closeModal());
  };
  return (
    <ModalContainer type='detail' title='상세글 제목' modalWidth={730} handleCloseModal={handleCloseCardDetailModal}>
      <StDetailModalContainer>
        <div className='content-area'>
          <div className='tag-area'>
            <ColumnNameTag name='To do' />
          </div>
          <div className='detail-area'></div>
          <div className='comment-area'></div>
        </div>
        <div className='information-area'></div>
      </StDetailModalContainer>
    </ModalContainer>
  );
};

export default CardDetail;
