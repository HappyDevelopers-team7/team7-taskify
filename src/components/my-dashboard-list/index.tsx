import { MouseEvent, useEffect, useState, useCallback } from 'react';
import MyDashBoardListItem from '../my-dashboard-list-item';
import StDashBoardListSection from './style';
import { getDashboardList } from '@/api/getDashboardList';
import { useDispatch, useSelector } from 'react-redux';
import { DashBoardRootState, setDashboardList } from '@/redux/dashboardListSlice';

interface MyDashBoardListProps {
  handleCreateDashboard: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

const MyDashBoardList = ({ handleCreateDashboard }: MyDashBoardListProps) => {
  const dispatch = useDispatch();
  const dashboardList = useSelector((state: DashBoardRootState) => state.dashboardList.dashboardList);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [previewDisabled, setPreviewDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const setDashboard = useCallback(async () => {
    try {
      const result = await getDashboardList(currentPage);
      dispatch(setDashboardList(result.dashboards));
      setTotalPage(Math.ceil(result.totalCount / 5));
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  }, [currentPage, dispatch]);

  const handleClickPreview = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setNextDisabled(false);
      if (currentPage === 2) {
        setPreviewDisabled(true);
      }
    } else {
      setPreviewDisabled(true);
    }
  };

  const handleClickNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      setPreviewDisabled(false);
      if (currentPage === totalPage - 1) {
        setNextDisabled(true);
      }
    } else {
      setNextDisabled(true);
    }
  };

  useEffect(() => {
    setDashboard();
  }, [currentPage, setDashboard]);

  return (
    <>
      <StDashBoardListSection>
        <ul>
          <li>
            <button aria-haspopup='true' type='button' onClick={handleCreateDashboard}>
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
              {currentPage} / {totalPage}
            </p>
            <div className='pagination-button'>
              <button className='prev-button' disabled={previewDisabled} type='button' onClick={handleClickPreview}>
                <img
                  src={
                    currentPage <= 1
                      ? '/assets/image/icons/arrowForwardIconGrayLeft.svg'
                      : '/assets/image/icons/arrowForwardIconLeft.svg'
                  }
                  alt='이전 목록 버튼'
                />
              </button>
              <button className='next-button' disabled={nextDisabled} type='button' onClick={handleClickNext}>
                <img
                  src={
                    currentPage === totalPage
                      ? '/assets/image/icons/arrowForwardIconGray.svg'
                      : '/assets/image/icons/arrowForwardIcon.svg'
                  }
                  alt='다음 목록 버튼'
                />
              </button>
            </div>
          </div>
        ) : null}
      </StDashBoardListSection>
    </>
  );
};

export default MyDashBoardList;
