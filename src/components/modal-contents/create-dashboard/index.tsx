import InputText from '@/components/input/input-text';
import ModalContainer from '@/components/modal-container';
import { INPUT_ERROR_MESSAGES } from '@/constants/message';
import { closeModal } from '@/redux/modalSlice';
import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

const CreateDashboard = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleCloseCreateDashboardModal = () => {
    // 대시보드 생성 모달을 닫아준다.
    dispatch(closeModal());
  };
  const handleSubmitCreateDashboardModal = (e: SyntheticEvent) => {
    e.preventDefault();
    if (inputValue) {
      // 대시보드 생성 submit 동작을 넣어준다.
      dispatch(closeModal());
      setInputValue('');
    } else {
      alert(INPUT_ERROR_MESSAGES.PLEASE_ENTER_VALUE);
    }
  };
  return (
    <ModalContainer
      title='대시보드 생성'
      closeButtonName='취소'
      submitButtonName='생성'
      modalWidth={506}
      handleCloseModal={handleCloseCreateDashboardModal}
      handleSubmitModal={handleSubmitCreateDashboardModal}
    >
      <form onSubmit={handleSubmitCreateDashboardModal}>
        <InputText
          setValue={setInputValue}
          autoFocus={true}
          required
          labelName='대시보드 이름'
          placeholder='대시보드 이름을 입력하세요.'
        />
      </form>
    </ModalContainer>
  );
};

export default CreateDashboard;
