import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/redux/modalSlice';
import axiosInstance from '@/api/instance/axiosInstance';
import { StColumnModal } from './style';
import ModalContainer from '@/components/modal-container';
import API from '@/api/constants';
import { useParams } from 'react-router-dom';
import { Columns } from '../../pages/dashboard-id';

const ModalComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [newColumnName, setNewColumnName] = useState('');
  const [columns, setColumns] = useState<Columns[]>();

  const handleCloseModal = () => {
    dispatch(closeModal());
    setNewColumnName('');
  };

  const handleSubmitModal = () => {
    console.log('새로운 컬럼 이름:', newColumnName);

    // 중복된 컬럼 이름 검사
    const isDuplicate = columns?.some((column) => column.title === newColumnName);
    if (isDuplicate) {
      alert('중복된 컬럼 이름입니다.');
      return;
    }

    axiosInstance
      .post(API.COLUMNS.COLUMNS, {
        title: newColumnName,
        dashboardId: Number(id),
      })
      .then(() => {
        dispatch(closeModal());
        viewColumns();
      })
      .catch((error) => {
        console.error('post 에러! : ', error);
      });
  };

  const viewColumns = () => {
    axiosInstance
      .get(`${API.COLUMNS.COLUMNS}?dashboardId=${id}`)
      .then((res) => {
        setColumns(res.data.data);
      })
      .catch((error) => {
        console.error('컬럼 가져오기 실패 : ', error);
      });
  };

  useEffect(() => {
    viewColumns(); // 초기 렌더링 시에 컬럼 데이터를 가져옴
  }, [id]);

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
