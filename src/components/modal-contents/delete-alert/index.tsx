import ModalContainer from '@/components/modal-container';
import { closeSecondModal } from '@/redux/secondModalSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import StAlertModalContent from '../reject-invitation/style';
import { SIMPLE_MESSAGES } from '@/constants/message';

const DeleteAlert = () => {
  const dispatch = useDispatch();
  const handleCloseReject = () => {
    dispatch(closeSecondModal());
    toast.warning(SIMPLE_MESSAGES.CANCELED);
  };

  const handleSubmitReject = async () => {};
  return (
    <ModalContainer
      closeButtonName='취소'
      submitButtonName='삭제'
      modalWidth={506}
      handleCloseModal={handleCloseReject}
      handleSubmitModal={handleSubmitReject}
    >
      <StAlertModalContent>
        <h5>정말 삭제하시겠어요?</h5>
        <p>한 번 삭제되면 되돌릴 수 없습니다.</p>
      </StAlertModalContent>
    </ModalContainer>
  );
};

export default DeleteAlert;
