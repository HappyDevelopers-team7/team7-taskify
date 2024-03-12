import Container from './style';
import AddColumnButton from '@/components/add-column-button';

const DashBoardId = () => {
  return (
    <Container>
      <div className='column-box'></div>
      <div className='button-box'>
        <AddColumnButton>새로운 컬럼 추가하기</AddColumnButton>
      </div>
    </Container>
  );
};

export default DashBoardId;
