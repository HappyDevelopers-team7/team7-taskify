import { useParams } from 'react-router-dom';

const DashBoardId = () => {
  // 로그인 후에는 동일한 헤더와 네브를 봐야하니 layout 파일로 옮김.
  const { id } = useParams();
  return <>{id}</>;
};

export default DashBoardId;
