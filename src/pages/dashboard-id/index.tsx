import { useParams } from 'react-router-dom';
import axiosInstance from '@/api/instance/axiosInstance';
import Container from './style';
import AddColumnButton from '@/components/add-column-button';
import API from '@/api/constants';
import { useEffect, useState } from 'react';
import Column from '@/components/column';
import LoadingSpinner from '@/components/loading-spinner';

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

  const createColumns = () => {
    const name = prompt('컬럼 이름');
    if (name) {
      axiosInstance
        .post(API.COLUMNS.COLUMNS, {
          title: name,
          dashboardId: Number(id),
        })
        .then(() => viewColumns());
    } else {
      alert('이름써');
    }
  };

  const viewColumns = () => {
    setIsLoading(true);
    axiosInstance.get(`${API.COLUMNS.COLUMNS}?dashboardId=${id}`).then((res) => {
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
        <AddColumnButton createColumns={createColumns}>새로운 컬럼 추가하기</AddColumnButton>
      </div>
    </Container>
  );
};

export default DashBoardId;
