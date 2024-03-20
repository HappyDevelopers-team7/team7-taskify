import ModalContainer from '@/components/modal-container';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/redux/modalSlice';
import InputText from '@/components/input/input-text';
import { useState } from 'react';
import { postInviteDashboard } from '@/api/postInviteDashboard';
import { toast } from 'react-toastify';
import { INVITATION_MESSAGES, AUTH_ERROR_MESSAGES, INPUT_ERROR_MESSAGES } from '@/constants/message';
interface InviteProps {
  id: string;
}
const InviteDashboard = ({ id }: InviteProps) => {
  const dispatch = useDispatch();
  const [inviteEmailInputValue, setInviteEmailInputValue] = useState('');

  const handleCloseInviteDashboardModal = () => {
    dispatch(closeModal());
  };

  const handleSubmitInviteDashboardModal = async () => {
    if (inviteEmailInputValue) {
      const result = await postInviteDashboard(inviteEmailInputValue, id);
      if (result && result.status === 201) {
        toast.success(INVITATION_MESSAGES.DO_INVITATION); //초대완료
      }
      if (result && result.status === 400) {
        toast.error(AUTH_ERROR_MESSAGES.INVALID_EMAIL); //이메일 형식 확인해줘
      }
      if (result && result.status === 409) {
        toast.error(INVITATION_MESSAGES.ALREADY_INVITE); // 이미 가입된 유저
      }
      dispatch(closeModal());
      setInviteEmailInputValue('');
    } else {
      toast.error(INPUT_ERROR_MESSAGES.PLEASE_ENTER_VALUE); // 값을 입력해주세요.
    }
  };

  return (
    <ModalContainer
      title='초대하기'
      closeButtonName='취소'
      submitButtonName='생성'
      modalWidth={520}
      handleCloseModal={handleCloseInviteDashboardModal}
      handleSubmitModal={handleSubmitInviteDashboardModal}
    >
      <form onSubmit={handleSubmitInviteDashboardModal}>
        <InputText
          setValue={setInviteEmailInputValue}
          autoFocus={true}
          required
          labelName='이메일'
          placeholder='이메일을 이름을 입력하세요.'
        />
      </form>
    </ModalContainer>
  );
};

export default InviteDashboard;
