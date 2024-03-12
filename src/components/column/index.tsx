import Container from './style';
import { Columns } from '@/pages/dashboard-id';
import axiosInstance from '@/api/instance/axiosInstance';
import API from '@/api/constants';

interface Props {
  props: Columns;
  viewColumns: () => void;
}
const Column = ({ props, viewColumns }: Props) => {
  const removeColumn = () => {
    const isConfirmed = confirm('삭제?');
    if (isConfirmed) {
      axiosInstance.delete(`${API.COLUMNS.COLUMNS}/${props.id}`).then(() => viewColumns());
    }
  };

  return (
    <Container>
      <div className='column-header'>
        <div className='column-color' />
        <h2>{props.title}</h2>
        <div className='inner-cards'>3</div>
        <img src='/assets/image/icons/settingIcon.svg' onClick={removeColumn} />
      </div>
      <div className='column-body'>
        <button className='add-card'>
          <img src='/assets/image/icons/bannerAddIcon.svg' />
        </button>
      </div>
    </Container>
  );
};

export default Column;
