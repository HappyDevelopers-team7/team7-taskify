import { useParams } from 'react-router-dom';
import axiosInstance from '@/api/instance/axiosInstance';
import Container from './style';
import AddColumnButton from '@/components/add-column-button';
import API from '@/api/constants';
import { useEffect, useState } from 'react';
import Column from '@/components/column';
import LoadingSpinner from '@/components/loading-spinner';
import AddColumnModal from '../../components/modal-add-column';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';

export type Columns = {
  createdAt: string;
  dashboardId: number;
  id: number;
  teamId: string;
  title: string;
  updatedAt: string;
};

export type Members = {
  createdAt: string;
  email: string;
  id: number;
  isOwner: true;
  nickname: string;
  profileImageUrl: string | undefined;
  updatedAt: string;
  userId: number;
};

export type Tag = {
  id: number;
  name: string;
  backgroundColor: string;
  color: string;
};

const DashBoardId = () => {
  const { id } = useParams();
  const [columns, setColumns] = useState<Columns[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const openModalName = useSelector((state: RootState) => state.modal.openModalName);
  const [members, setMembers] = useState<Members[]>([]);

  const viewColumns = () => {
    // 컬럼 조회 함수
    setIsLoading(true);
    axiosInstance
      .get(`${API.COLUMNS.COLUMNS}?dashboardId=${id}`)
      .then((res) => {
        setColumns(res.data.data);
        setIsLoading(false);
      })
      .catch(() => alert('컬럼 조회 실패'));
  };

  const viewMembers = () => {
    // 초대받은 멤버 조회 함수
    axiosInstance
      .get(`${API.MEMBERS.MEMBERS}?page=1&size=9999&dashboardId=${id}`)
      .then((res) => setMembers(res.data.members))
      .catch(() => alert('멤버 조회 실패'));
  };

  useEffect(() => {
    viewColumns();
    viewMembers();
  }, [id]);

  return (
    <Container>
      {isLoading && <LoadingSpinner />}
      {columns &&
        columns.map((columnData) => (
          <Column
            key={columnData.id}
            dashboardId={id}
            columnData={columnData}
            memberData={members}
            viewColumns={viewColumns}
          />
        ))}
      <div className='button-box'>
        <AddColumnButton>새로운 컬럼 추가하기</AddColumnButton>
      </div>
      {openModalName === 'addColumnModal' && <AddColumnModal setColumns={setColumns} />}
    </Container>
  );
};

export default DashBoardId;
