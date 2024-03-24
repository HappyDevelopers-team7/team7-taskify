import { useParams } from 'react-router-dom';
import ArrowButton from '../arrow_button';
import StInviteList from './style';
import { useDispatch } from 'react-redux';
import { AppDispatch, fetchMyInfo } from '@/redux/myInfoSlice';
import { openModal, setOpenModalName } from '@/redux/modalSlice';
import { useState, useEffect } from 'react';
import getDashboardInviteList from '@/api/getDashboardInviteList';
import deleteDashboardInvite from '@/api/deleteDashboardInvite';
import React from 'react';

interface InviterAndInvitee {
  nickname: string;
  email: string;
  id: number;
}

interface Dashboard {
  title: string;
  id: number;
}

interface Invitation {
  id: number;
  inviter: InviterAndInvitee;
  teamId: string;
  dashboard: Dashboard;
  invitee: InviterAndInvitee;
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface DashboardInviteList {
  totalCount: number;
  invitations: Invitation[];
}

const EditDashBoardInviteList = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const [list, setList] = useState<DashboardInviteList | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [invitionsId, setInvitionsId] = useState(1);
  const handleLeftClick = () => setCurrentPage(currentPage - 1);
  const handleRightClick = () => setCurrentPage(currentPage + 1);
  const MEMBERS_PER_PAGE = 5;

  const handleClickInviteDashboard = () => {
    dispatch(setOpenModalName('InviteDashboard'));
    dispatch(openModal('InviteDashboard'));
  };
  //상태를 전역으로 관리해서 로그인정보가 바뀌거나 하면 바로 다시 렌더링
  useEffect(() => {
    dispatch(fetchMyInfo());
  }, [dispatch]);

  const fetchDashboardInviteList = async (
    id: string,
    currentPage: number,
    setList: React.Dispatch<React.SetStateAction<DashboardInviteList | null>>,
    setTotalPages: React.Dispatch<React.SetStateAction<number>>,
    MEMBERS_PER_PAGE: number,
  ) => {
    try {
      const res = await getDashboardInviteList(id, currentPage);
      const invitations = res.invitations;
      setList(res);
      setTotalPages(Math.ceil(res.totalCount / MEMBERS_PER_PAGE));
      if (invitations && invitations.length > 0) {
        setInvitionsId(invitations[0].id);
      }
    } catch (error) {
      console.error('Error fetching dashboard members:', error);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchDashboardInviteList(id, currentPage, setList, setTotalPages, MEMBERS_PER_PAGE);
  }, [id, currentPage]);

  const handleCancelInviteClick = (invitionsId: number) => {
    if (!id) return;
    deleteDashboardInvite(id, invitionsId)
      .then(() => {
        if (!id || !list) return;
        fetchDashboardInviteList(id, currentPage, setList, setTotalPages, MEMBERS_PER_PAGE);
      })
      .catch((error) => {
        console.error('초대 내역 삭제 중 오류 발생:', error);
      });
  };

  const currentInvites = list?.invitations || [];

  // const uniqueInvites = currentInvites.filter(
  //   //중복된 이메일 제거함
  //   (invite, index, self) => self.findIndex((t) => t.invitee.email === invite.invitee.email) === index,
  // );

  const getContainerSizeClass = (length: number) => {
    if (length >= 5) {
      return 'size-5';
    } else {
      return `size-${length}`;
    }
  };

  const containerSize = getContainerSizeClass(currentInvites.length);

  return (
    <StInviteList>
      <div className='memberlist-head'>
        <p>초대 내역</p>
        <div className='currentpage-alarm'>
          <p>
            {totalPages} 페이지 중 {currentPage}
          </p>
          <ArrowButton
            onLeftClick={handleLeftClick}
            onRightClick={handleRightClick}
            leftDisabled={currentPage === 1 || currentInvites.length === 0}
            rightDisabled={currentPage === totalPages || currentInvites.length === 0}
          />
          <button className='invite-button' onClick={handleClickInviteDashboard}>
            <img src='/assets/image/icons/addBoxIcon.svg' alt='초대하기(플러스) 아이콘' />
            초대하기
          </button>
        </div>
      </div>
      <p className='email'>이메일</p>
      <ul className={`member-list ${containerSize}`}>
        {currentInvites.map((list, index) => (
          <React.Fragment key={list.id}>
            <li key={list.id}>
              {list.invitee.email}
              <button className='delete-button' onClick={() => handleCancelInviteClick(invitionsId)}>
                취소
              </button>
            </li>
            {index !== currentInvites.length - 1 && (
              <div className='gray-line' key={`line-${list.invitee.id}-${index}`} />
            )}
          </React.Fragment>
        ))}
      </ul>
    </StInviteList>
  );
};

export default EditDashBoardInviteList;
