import ModalContainer from '@/components/modal-container';
import { closeModal } from '@/redux/modalSlice';
import { useDispatch } from 'react-redux';
import StAlertModalContent from './style';

const RejectInvitation = () => {
  const dispatch = useDispatch();
  const handleCloseReject = () => {
    dispatch(closeModal());
  };

  const handleSubmitReject = () => {
    dispatch(closeModal());
  };
  return (
    <ModalContainer
      closeButtonName='취소'
      submitButtonName='거절'
      modalWidth={506}
      handleCloseModal={handleCloseReject}
      handleSubmitModal={handleSubmitReject}
    >
      <StAlertModalContent>
        <h5>대시보드 초대가 거절됩니다.</h5>
        <p>한 번 거절된 초대는 되돌릴 수 없습니다.</p>
      </StAlertModalContent>
    </ModalContainer>
  );
};

export default RejectInvitation;
