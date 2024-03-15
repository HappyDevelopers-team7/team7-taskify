import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StColumnModal, StModalTest } from './style';
import ModalContainer from '@/components/modal-container';
import { RootState, closeModal, openModal, setOpenModalName } from '@/redux/modalSlice';
// import axiosInstance from '@/api/instance/axiosInstance';
// import API from '@/api/constants';

const ModalTest = () => {
  const dispatch = useDispatch();
  const openModalName = useSelector((state: RootState) => state.modal.openModalName);

  const [newColumnName, setNewColumnName] = useState('');

  const handleOpenModal = () => {
    dispatch(setOpenModalName('addColumnModal'));
    dispatch(openModal('addColumnModal'));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    setNewColumnName('');
  };

  const handleSubmitModal = () => {
    console.log('새로운 컬럼 이름:', newColumnName);
    dispatch(closeModal());
  };

  return (
    <>
      <StModalTest>
        <h1>모달용 테스트 페이지입니다.</h1>
        <button type='button' onClick={handleOpenModal}>
          컬럼 추가
        </button>
      </StModalTest>
      {openModalName === 'addColumnModal' && (
        <ModalContainer
          title='새 컬럼 생성'
          closeButtonName='취소'
          submitButtonName='생성'
          modalWidth={540}
          handleCloseModal={handleCloseModal}
          handleSubmitModal={handleSubmitModal}
        >
          <StColumnModal>
            <h3>이름</h3>
            <input
              type='text'
              placeholder='새로운 프로젝트'
              value={newColumnName}
              onChange={(e) => setNewColumnName(e.target.value)}
            />
          </StColumnModal>
        </ModalContainer>
      )}
    </>
  );
};

export default ModalTest;
