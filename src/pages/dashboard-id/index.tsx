import { useParams } from 'react-router-dom';
import axiosInstance from '@/api/instance/axiosInstance';
import Container from './style';
import AddColumnButton from '@/components/add-column-button';
import API from '@/api/constants';
import { useEffect, useState } from 'react';
import Column from '@/components/column';

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
    axiosInstance.get(`${API.COLUMNS.COLUMNS}?dashboardId=${id}`).then((res) => {
      console.log(res.data.data);
      setColumns(res.data.data);
    });
  };

  useEffect(() => {
    viewColumns();
  }, [id]);

  return (
    <Container>
      {columns && columns.map((it) => <Column key={it.id} props={it} viewColumns={viewColumns} />)}
      <div className='button-box'>
        <AddColumnButton createColumns={createColumns}>새로운 컬럼 추가하기</AddColumnButton>
      </div>
    </Container>
  );
};

export default DashBoardId;
