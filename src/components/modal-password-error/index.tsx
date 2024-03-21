import { useDispatch } from 'react-redux';
import { openModal } from '@/redux/modalSlice';
import ModalContainer from '@/components/modal-container';
import { StModalContainer } from './style';

const PasswordErrorModal = () => {
  const dispatch = useDispatch();

  const handleSubmitModal = () => {
    dispatch(openModal(''));
    window.location.reload();
  };

  return (
    <StModalContainer>
      <ModalContainer type='default' modalWidth={540} handleSubmitModal={handleSubmitModal} submitButtonName='닫기'>
        <div style={{ height: '90px' }}>
          <p style={{ fontSize: '18px', marginTop: '20px' }}>현재 비밀번호가 틀렸습니다.</p>
        </div>
      </ModalContainer>
    </StModalContainer>
  );
};

export default PasswordErrorModal;
