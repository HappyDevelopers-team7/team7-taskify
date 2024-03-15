import { useParams } from 'react-router-dom';
import axiosInstance from '@/api/instance/axiosInstance';
import Container from './style';
import AddColumnButton from '@/components/add-column-button';
import API from '@/api/constants';
import { useEffect, useState } from 'react';
import Column from '@/components/column';
import LoadingSpinner from '@/components/loading-spinner';
import ModalComponent from '../modal-test';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/modalSlice';

export type Columns = {
  createdAt: string;
  dashboardId: number;
  id: number;
  teamId: string;
  title: string;
  updatedAt: string;
};

const DashBoardId = () => {
  const { id } = useParams();
  const [columns, setColumns] = useState<Columns[]>();
  const [isLoading, setIsLoading] = useState(true);
  const openModalName = useSelector((state: RootState) => state.modal.openModalName);

  const viewColumns = () => {
    setIsLoading(true);
    axiosInstance.get(`${API.COLUMNS.COLUMNS}?dashboardId=${id}`).then((res) => {
      console.log(res.data.data);
      setColumns(res.data.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    viewColumns();
  }, [id]);

  return (
    <Container>
      {isLoading && <LoadingSpinner />}
      {columns && columns.map((it) => <Column key={it.id} props={it} viewColumns={viewColumns} dashboardId={id} />)}
      <div className='button-box'>
        <AddColumnButton>새로운 컬럼 추가하기</AddColumnButton>
      </div>
      {openModalName === 'addColumnModal' && <ModalComponent />}
    </Container>
  );
};

export default DashBoardId;
