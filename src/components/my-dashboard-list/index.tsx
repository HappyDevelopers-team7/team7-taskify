import { MouseEvent, useEffect, useState } from 'react';
import MyDashBoardListItem from '../my-dashboard-list-item';
import StDashBoardListSection from './style';
import { getDashboardList } from '@/api/getDashboardList';
import axiosInstance from '@/api/instance/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setDashboardList } from '@/redux/dashboardListSlice';

interface MyDashBoardListProps {
  handleCreateDashboard: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

const MyDashBoardList = ({ handleCreateDashboard }: MyDashBoardListProps) => {
  const dispatch = useDispatch();
  const dashboardList = useSelector((state: RootState) => state.dashboardList.dashboardList);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const setDashboard = async () => {
    try {
      const result = await getDashboardList(currentPage);
      dispatch(setDashboardList(result.dashboards));
      setTotalPage(Math.ceil(result.totalCount / 5));
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  const handleClickPreview = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleInviteMember = async () => {
    const response = await axiosInstance.post(`dashboards/${4742}/invitations`, {
      email: 'yum@naver.com',
    });

    const responseData = await response;
    console.log(responseData);
    return responseData;
  };

  useEffect(() => {
    setDashboard();
  }, [currentPage]);

  return (
    <>
      <button onClick={handleInviteMember}>초대하기 버튼 입니다.</button>
      <StDashBoardListSection>
        <ul>
          <li>
            <button type='button' onClick={handleCreateDashboard}>
              <p>새로운 대시보드 생성</p>
              <img src='assets/image/icons/bannerAddIcon.svg' alt='새로운 대시보드 생성하려면 클릭' />
            </button>
          </li>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            dashboardList.map((item) => (
              <li key={item.id}>
                <MyDashBoardListItem
                  dashBoardId={item.id}
                  stateColor={item.color}
                  title={item.title}
                  isCreatedByMe={item.createdByMe}
                />
              </li>
            ))
          )}
        </ul>
        {totalPage > 1 ? (
          <div className='list-pagination'>
            <p>
              {totalPage} 페이지 중 {currentPage}
            </p>
            <div className=''>
              <button type='button' aria-label='이전 목록' onClick={handleClickPreview}>
                prev
              </button>
              <button type='button' aria-label='다음 목록' onClick={handleClickNext}>
                next
              </button>
            </div>
          </div>
        ) : null}
      </StDashBoardListSection>
    </>
  );
};

export default MyDashBoardList;
