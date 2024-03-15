import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/redux/modalSlice';
import axiosInstance from '@/api/instance/axiosInstance';
import { StColumnModal } from './style';
import ModalContainer from '@/components/modal-container';
import API from '@/api/constants';
import { useParams } from 'react-router-dom';

const ModalComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [newColumnName, setNewColumnName] = useState('');

  const handleCloseModal = () => {
    dispatch(closeModal()); // 모달 닫기 외않되
    setNewColumnName('');
  };

  const handleSubmitModal = () => {
    console.log('새로운 컬럼 이름:', newColumnName);
    axiosInstance
      .post(API.COLUMNS.COLUMNS, {
        title: newColumnName,
        dashboardId: Number(id),
      })
      .then(() => {
        dispatch(closeModal());
      })
      .catch((error) => {
        console.error('Post request error:', error);
      });
  };

  return (
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
  );
};

export default ModalComponent;
