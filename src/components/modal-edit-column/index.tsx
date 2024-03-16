import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/redux/modalSlice';
import axiosInstance from '@/api/instance/axiosInstance';
import { StColumnModal } from './style';
import ModalContainer from '@/components/modal-container';
import API from '@/api/constants';
import { useParams } from 'react-router-dom';

const EditColumnModal = ({ columnName, handleUpdateColumn }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [editedColumnName, setEditedColumnName] = useState('');

  const handleCloseModal = () => {
    dispatch(closeModal());
    setEditedColumnName('');
  };

  const handleSubmitModal = () => {
    if (!editedColumnName) {
      alert('컬럼 이름을 입력하세요.');
      return;
    }

    axiosInstance
      .put(`${API.COLUMNS.COLUMNS}/${id}`, {
        title: editedColumnName,
      })
      .then(() => {
        dispatch(closeModal());
        handleUpdateColumn(id, editedColumnName);
      })
      .catch((error) => {
        console.error('컬럼 수정 에러:', error);
      });
  };

  useEffect(() => {
    setEditedColumnName(columnName);
  }, [columnName]);

  return (
    <ModalContainer
      title='컬럼 수정'
      closeButtonName='취소'
      submitButtonName='수정하기'
      modalWidth={540}
      handleCloseModal={handleCloseModal}
      handleSubmitModal={handleSubmitModal}
    >
      <StColumnModal>
        <h3>이름</h3>
        <input
          type='text'
          placeholder='컬럼 이름'
          value={editedColumnName}
          onChange={(e) => setEditedColumnName(e.target.value)}
        />
      </StColumnModal>
    </ModalContainer>
  );
};

export default EditColumnModal;
