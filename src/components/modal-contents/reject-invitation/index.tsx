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
      title='대시보드 초대 거절'
      closeButtonName='취소'
      submitButtonName='거절'
      modalWidth={506}
      handleCloseModal={handleCloseReject}
      handleSubmitModal={handleSubmitReject}
    >
      <StAlertModalContent>
        <h5>거절 하시겠어요? 한번 거절된 초대는 되돌릴 수 없습니다.</h5>
      </StAlertModalContent>
    </ModalContainer>
  );
};

export default RejectInvitation;
