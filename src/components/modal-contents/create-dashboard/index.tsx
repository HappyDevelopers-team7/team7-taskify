import InputText from '@/components/input/input-text';
import ModalContainer from '@/components/modal-container';
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
    // 대시보드 생성 submit 동작을 넣어준다.
    if (inputValue) {
      console.log(inputValue);
      dispatch(closeModal());
      setInputValue('');
    } else {
      alert('값을 입력해 주세요.');
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
          required
          labelName='대시보드 이름'
          placeholder='대시보드 이름을 입력하세요.'
        />
      </form>
    </ModalContainer>
  );
};

export default CreateDashboard;
