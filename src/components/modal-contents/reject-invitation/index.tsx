import ModalContainer from '@/components/modal-container';
import { closeModal } from '@/redux/modalSlice';
import { useDispatch } from 'react-redux';
import StAlertModalContent from './style';
import { putInviteAccepted } from '@/api/putInviteAccepted';
import { toast } from 'react-toastify';
import { INVITATION_ERROR_MESSAGES, INVITATION_MESSAGES } from '@/constants/message';
import { getInvitation } from '@/api/getInvitation';
import { setInvitationList, updateInvitationList } from '@/redux/invitationSlice';

interface RejectInvitationProps {
  invitationId: number;
}

const RejectInvitation = ({ invitationId }: RejectInvitationProps) => {
  const dispatch = useDispatch();
  const handleCloseReject = () => {
    dispatch(closeModal());
    toast.success(INVITATION_MESSAGES.REJECT_CANCELED);
  };

  const handleSubmitReject = async () => {
    try {
      const result = await putInviteAccepted(false, invitationId);
      dispatch(closeModal());
      if (result?.status === 200) {
        toast.success(INVITATION_MESSAGES.REJECT_INVITATION);
        const invitationListResult = await getInvitation();
        dispatch(setInvitationList(invitationListResult.invitations));
        dispatch(updateInvitationList(invitationListResult.invitations));
      }

      if (result?.status === 404) {
        toast.success(INVITATION_ERROR_MESSAGES.NOT_FOUND);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
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
