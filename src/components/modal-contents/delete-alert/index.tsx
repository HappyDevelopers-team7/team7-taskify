import ModalContainer from '@/components/modal-container';
import { closeSecondModal } from '@/redux/secondModalSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const DeleteAlert = () => {
  const dispatch = useDispatch();
  const handleCloseReject = () => {
    dispatch(closeSecondModal());
    toast.warning('삭제 취소 되었습니다.');
  };

  const handleSubmitReject = async () => {};
  return (
    <ModalContainer
      closeButtonName='취소'
      submitButtonName='거절'
      modalWidth={506}
      handleCloseModal={handleCloseReject}
      handleSubmitModal={handleSubmitReject}
    >
      테스트 모달
    </ModalContainer>
  );
};

export default DeleteAlert;
