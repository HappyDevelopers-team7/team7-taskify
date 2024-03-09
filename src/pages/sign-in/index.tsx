import { Link } from 'react-router-dom';
import StSignInContainer from './style';
import AuthInput from '@/components/auth-input';
import FullButton from '@/components/full-button';

const SignIn = () => {
  return (
    <StSignInContainer>
      <div className='container__box'>
        <h1>
          <Link to='/'>
            <img src='assets/image/logos/largeLogo.svg' alt='랜딩 페이지로 이동하려면 클릭' />
          </Link>
        </h1>
        <h3>오늘도 만나서 반가워요!</h3>
        <form>
          <AuthInput id='email' name='email' type='email' placeholder='이메일을 입력해 주세요.' label='이메일' />
          <AuthInput
            id='password'
            name='password'
            type='password'
            password
            placeholder='비밀번호를 입력해 주세요.'
            label='비밀번호'
          />
          <div className='form__submit-button'>
            <FullButton disabled>로그인</FullButton>
          </div>
        </form>
        <h5>
          회원이 아니신가요? <Link to='/sign-up'>회원가입하기</Link>
        </h5>
      </div>
    </StSignInContainer>
  );
};

export default SignIn;
