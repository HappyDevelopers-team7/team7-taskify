import CardDetail from '@/components/modal-contents/card-detail';
import { ModalRootState, openModal, setOpenModalName } from '@/redux/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

const CardDetailTest = () => {
  const dispatch = useDispatch();
  const openModalName = useSelector((state: ModalRootState) => state.modal.openModalName);

  const handleOpenCardDetailModal = () => {
    dispatch(setOpenModalName('cardDetailModal'));
    dispatch(openModal('cardDetailModal'));
  };
  return (
    <>
      <h1>card상세를 위한 테스트 페이지</h1>
      <br></br>
      <button type='button' onClick={handleOpenCardDetailModal}>
        상세 모달 띄우기
      </button>
      {openModalName === 'cardDetailModal' ? <CardDetail /> : null}
    </>
  );
};

export default CardDetailTest;
