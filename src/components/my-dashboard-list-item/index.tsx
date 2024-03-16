import { Link } from 'react-router-dom';
import StListItem from './style';

interface MyDashBoardListItemProps {
  dashBoardId: number;
  stateColor: string;
  title: string;
  isCreatedByMe: boolean;
}

const MyDashBoardListItem = ({ dashBoardId, stateColor, title, isCreatedByMe }: MyDashBoardListItemProps) => {
  return (
    <>
      <Link to={`/dashboard/${dashBoardId}`} role='button'>
        <StListItem $stateColor={stateColor}>
          <span className='list-item__color'></span>
          <div className='list-item__title'>
            <h5>{title}</h5>
            {isCreatedByMe ? <span></span> : null}
          </div>
          <img src='assets/image/icons/arrowForwardIcon.svg' alt='대시보드 이름으로 이동하려면 클릭' />
        </StListItem>
      </Link>
    </>
  );
};

export default MyDashBoardListItem;
