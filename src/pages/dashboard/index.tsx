import MyDashBoardList from '@/components/my-dashboard-list';
import StDashBoardWrap from './style';

const DashBoard = () => {
  // 로그인 후에는 동일한 헤더와 네브를 봐야하니 layout 파일로 옮김.
  return (
    <>
      <StDashBoardWrap>
        <MyDashBoardList />
      </StDashBoardWrap>
    </>
  );
};

export default DashBoard;
