import { Link } from 'react-router-dom';
import StNotFound from './style';

const NotFound = () => {
  return (
    <>
      <StNotFound>
        <div className='container'>
          <h1 className='logo-area'>
            <Link to='/' role='button'>
              <img src='/assets/image/logos/errorLogo.svg' alt='페이지를 찾을 수 없습니다. 메인으로 이동하기' />
            </Link>
          </h1>
          <div className='text-area'>
            <h2>페이지를 찾을 수 없습니다 &#58; &#40;</h2>
            <p>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</p>
            <p>입력하신 주소를 다시 확인해 주세요.</p>
          </div>
          <div className='button-area'>
            <Link to='/' role='button'>
              메인으로 돌아가기
            </Link>
          </div>
        </div>
      </StNotFound>
    </>
  );
};

export default NotFound;
