import { MouseEvent } from 'react';
import MyDashBoardListItem from '../my-dashboard-list-item';
import StDashBoardListSection from './style';

interface MyDashBoardListProps {
  handleCreateDashboard: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

const MyDashBoardList = ({ handleCreateDashboard }: MyDashBoardListProps) => {
  return (
    <>
      <StDashBoardListSection>
        <ul>
          <li>
            <button type='button' onClick={handleCreateDashboard}>
              <p>새로운 대시보드 생성</p>
              <img src='assets/image/icons/bannerAddIcon.svg' alt='새로운 대시보드 생성하려면 클릭' />
            </button>
          </li>
          <li>
            <MyDashBoardListItem stateColor='#76A5EA' />
          </li>
          <li>
            <MyDashBoardListItem stateColor='#E876EA' />
          </li>
          <li>
            <MyDashBoardListItem stateColor='#7AC555' />
          </li>
          <li>
            <MyDashBoardListItem stateColor='#76A5EA' />
          </li>
          <li>
            <MyDashBoardListItem stateColor='#E876EA' />
          </li>
        </ul>
        <div className='list-pagination'>
          <p>1 페이지 중 1</p>
          <div className=''>
            <button type='button' aria-label='이전 목록'>
              prev
            </button>
            <button type='button' aria-label='다음 목록'>
              next
            </button>
          </div>
        </div>
      </StDashBoardListSection>
    </>
  );
};

export default MyDashBoardList;
