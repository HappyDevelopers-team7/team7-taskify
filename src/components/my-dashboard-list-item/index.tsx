import { Link } from 'react-router-dom';
import StListItem from './style';

interface MyDashBoardListItemProps {
  stateColor: string;
}

const MyDashBoardListItem = ({ stateColor }: MyDashBoardListItemProps) => {
  return (
    <>
      <Link to='/'>
        <StListItem $stateColor={stateColor}>
          <span className='list-item__color'></span>
          <div className='list-item__title'>
            <h5>내 대시보드</h5>
            <span></span>
          </div>
          <img src='assets/image/icons/arrowForwardIcon.svg' alt='대시보드 이름으로 이동하려면 클릭' />
        </StListItem>
      </Link>
    </>
  );
};

export default MyDashBoardListItem;
