import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/redux/modalSlice';
import axiosInstance from '@/api/instance/axiosInstance';
import { StColumnModal } from './style';
import ModalContainer from '@/components/modal-container';
import API from '@/api/constants';

interface Props {
  columnId: number;
  columnName: string | undefined;
  handleEditColumn: (columnId: number, editedColumnName: string) => void;
}

const EditColumnModal = ({ columnId, columnName, handleEditColumn }: Props) => {
  const dispatch = useDispatch();
  const [editedColumnName, setEditedColumnName] = useState(columnName); // 수정 상태 추가

  const handleCloseModal = () => {
    dispatch(closeModal());
    setEditedColumnName(''); // 수정 상태 초기화
  };

  const handleSubmitModal = () => {
    if (!editedColumnName) {
      alert('컬럼 이름을 입력하세요.');
      return;
    }

    axiosInstance
      .put(`${API.COLUMNS.COLUMNS}/${columnId}`, {
        title: editedColumnName,
      })
      .then(() => {
        handleEditColumn(columnId, editedColumnName);
        dispatch(closeModal());
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
      title='컬럼 관리'
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
