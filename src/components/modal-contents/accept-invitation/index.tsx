import ModalContainer from '@/components/modal-container';
import { closeModal } from '@/redux/modalSlice';
import { useDispatch } from 'react-redux';
import StAlertModalContent from '../reject-invitation/style';
import { putInviteAccepted } from '@/api/putInviteAccepted';
import { INVITATION_ERROR_MESSAGES, INVITATION_MESSAGES } from '@/constants/message';
import { toast } from 'react-toastify';
import { getInvitation } from '@/api/getInvitation';
import { setInvitationList, updateInvitationList } from '@/redux/invitationSlice';
import { getDashboardList } from '@/api/getDashboardList';
import { setDashboardList } from '@/redux/dashboardListSlice';

interface AcceptInvitationProps {
  invitationId: number;
}

const AcceptInvitation = ({ invitationId }: AcceptInvitationProps) => {
  const dispatch = useDispatch();
  const handleCloseAccept = () => {
    dispatch(closeModal());
    toast.warning(INVITATION_MESSAGES.ACCEPT_CANCELED);
  };

  const handleSubmitAccept = async () => {
    try {
      const result = await putInviteAccepted(true, invitationId);
      if (result?.status === 200) {
        const invitationListResult = await getInvitation();
        const dashboardListResult = await getDashboardList(1);
        dispatch(setInvitationList(invitationListResult.invitations));
        dispatch(updateInvitationList(invitationListResult.invitations));
        dispatch(setDashboardList(dashboardListResult.dashboards));
        toast.success(INVITATION_MESSAGES.ACCEPT_INVITATION);
      }

      if (result?.status === 404) {
        toast.success(INVITATION_ERROR_MESSAGES.NOT_FOUND);
      }
      dispatch(closeModal());
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
  return (
    <ModalContainer
      closeButtonName='취소'
      submitButtonName='수락'
      modalWidth={506}
      handleCloseModal={handleCloseAccept}
      handleSubmitModal={handleSubmitAccept}
    >
      <StAlertModalContent>
        <h5>대시보드 초대를 수락합니다.</h5>
        <p>한 번 수락된 초대는 되돌릴 수 없습니다.</p>
      </StAlertModalContent>
    </ModalContainer>
  );
};

export default AcceptInvitation;
