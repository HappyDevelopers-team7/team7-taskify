import ModalContainer from '@/components/modal-container';
import { closeModal } from '@/redux/modalSlice';
import { useDispatch } from 'react-redux';
import StDetailModalContainer from './style';
import ColumnNameTag from '@/components/column-name-tag';
import DetailContentArea from '@/components/detail-content-area';
import DetailCommentArea from '@/components/detail-comment-area';

const CardDetail = () => {
  const dispatch = useDispatch();

  const handleCloseCardDetailModal = () => {
    dispatch(closeModal());
  };
  return (
    <ModalContainer type='detail' title='상세글 제목' modalWidth={730} handleCloseModal={handleCloseCardDetailModal}>
      <StDetailModalContainer>
        <div className='content-area'>
          <div className='tag-box'>
            <ColumnNameTag name='To do' />
            <span className='divide-bar'></span>
            <div className='sub-tag-box'></div>
          </div>
          <DetailContentArea
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nibh arcu, quis consequat ante
        cursus eget. Cras mattis, nulla non laoreet porttitor, diam justo laoreet eros, vel aliquet diam elit at leo.'
          />
          <DetailCommentArea />
        </div>
        <div className='information-area'></div>
      </StDetailModalContainer>
    </ModalContainer>
  );
};

export default CardDetail;
