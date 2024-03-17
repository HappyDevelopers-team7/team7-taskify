import ModalContainer from '@/components/modal-container';
import { closeModal } from '@/redux/modalSlice';
import { useDispatch } from 'react-redux';

const CardDetail = () => {
  const dispatch = useDispatch();

  const handleCloseCardDetailModal = () => {
    dispatch(closeModal());
  };
  return (
    <ModalContainer type='detail' title='상세글 제목' modalWidth={730} handleCloseModal={handleCloseCardDetailModal}>
      <h1>상세</h1>
    </ModalContainer>
  );
};

export default CardDetail;
