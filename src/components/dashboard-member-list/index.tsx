import { useEffect, useState } from 'react';
import StMemberListDiv from './style';
import { getDashboardMemberList } from '@/api/getDashboardMemberList';
import { useParams } from 'react-router-dom';
// import { DashboardMembers, User } from '../dashboard-Header';
import ArrowButton from '../arrow_button';
import React from 'react';
import { deleteDashboardMember } from '@/api/deleteDashboardMember';

export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export type Dashboards = {
  color: string;
  createdAt: string;
  createdByMe: boolean;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
};

export interface DashboardMembers {
  members: User[];
  totalCount: number;
}

const DashboardMemberList = () => {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<DashboardMembers | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // 총 페이지 수

  const handleLeftClick = () => setCurrentPage(currentPage - 1);
  const handleRightClick = () => setCurrentPage(currentPage + 1);
  const MEMBERS_PER_PAGE = 4;

  const fetchDashboardMemberList = async (
    id: string,
    currentPage: number,
    setMember: React.Dispatch<React.SetStateAction<DashboardMembers | null>>,
    setTotalPages: React.Dispatch<React.SetStateAction<number>>,
    MEMBERS_PER_PAGE: number,
  ) => {
    try {
      const res = await getDashboardMemberList(id, currentPage);
      setMember(res);
      setTotalPages(Math.ceil(res.totalCount / MEMBERS_PER_PAGE));
    } catch (error) {
      console.error('Error fetching dashboard members:', error);
    }
  };

  useEffect(() => {
    if (!id) return;
    // useEffect 내에서 fetchDashboardMemberList를 호출합니다.
    fetchDashboardMemberList(id, currentPage, setMember, setTotalPages, MEMBERS_PER_PAGE);
  }, [id, currentPage]);

  const handleDeleteUserClick = (memberId: number) => {
    deleteDashboardMember(memberId)
      .then(() => {
        if (!id) return;
        fetchDashboardMemberList(id, currentPage, setMember, setTotalPages, MEMBERS_PER_PAGE);
      })
      .catch((error) => {
        console.error('구성원 삭제 중 오류 발생:', error);
      });
  };

  const currentMembers = member?.members || [];
  const containerSize = `size-${currentMembers.length}`;

  const generateColor = (name: string) => {
    const key = name.toUpperCase()[0];

    switch (true) {
      case (key >= 'A' && key < 'F') || (key >= '가' && key < '다'):
        return 'green';
      case (key >= 'F' && key < 'K') || (key >= '다' && key < '바'):
        return 'purple';
      case (key >= 'K' && key < 'Q') || (key >= '바' && key < '아'):
        return 'orange';
      case (key >= 'Q' && key < 'V') || (key >= '아' && key < '타'):
        return 'blue';
      default:
        return 'pink';
    }
  };
  console.log(`currentMembers: ${currentMembers}`);
  console.log(`id: ${id}`);
  console.log(totalPages);
  return (
    <StMemberListDiv>
      <div className='memberlist-head'>
        <p>구성원</p>
        <div className='currentpage-alarm'>
          <p>
            {totalPages} 페이지 중 {currentPage}
          </p>
          <ArrowButton
            onLeftClick={handleLeftClick}
            onRightClick={handleRightClick}
            leftDisabled={currentPage === 1}
            rightDisabled={currentPage === totalPages}
          />
        </div>
      </div>
      <p className='name'>이름</p>
      <ul className={`member-list ${containerSize}`}>
        {currentMembers.map((member, index) => (
          <React.Fragment key={member.id}>
            <li key={member.id}>
              {member.profileImageUrl ? (
                <div className='profile-box'>
                  <div className={`myinfo-image`} style={{ backgroundImage: `url(${member?.profileImageUrl})` }} />
                  <p>{member.nickname}</p>
                </div>
              ) : (
                <div className='profile-box'>
                  <div className={`myinfo-color myinfo-color-${generateColor(member.nickname)}`}>
                    <div className='myinfo-initial'>{member.nickname.toUpperCase()[0]}</div>
                  </div>
                  <p>{member.nickname}</p>
                </div>
              )}
              <button className='delete-button' onClick={() => handleDeleteUserClick(member.id)}>
                삭제
              </button>
            </li>
            {index !== currentMembers.length - 1 && <div className='gray-line' key={`line-${member.id}-${index}`} />}
          </React.Fragment>
        ))}
      </ul>
    </StMemberListDiv>
  );
};

export default DashboardMemberList;
