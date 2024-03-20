import { useDispatch } from 'react-redux';
import { openModal } from '@/redux/modalSlice';
import ModalContainer from '@/components/modal-container';

const PasswordErrorModal = () => {
  const dispatch = useDispatch();

  const handleSubmitModal = () => {
    dispatch(openModal(''));
    window.location.reload();
  };

  return (
    <ModalContainer type='default' modalWidth={540} handleSubmitModal={handleSubmitModal} submitButtonName='닫기'>
      <p style={{ fontSize: '18px' }}>현재 비밀번호가 틀렸습니다.</p>
    </ModalContainer>
  );
};

export default PasswordErrorModal;
