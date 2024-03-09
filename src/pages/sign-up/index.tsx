import { Link } from 'react-router-dom';
import AuthInput from '@/components/auth-input';
import FullButton from '@/components/full-button';
import StSignInContainer from '../sign-in/style';

const SignUp = () => {
  return (
    <StSignInContainer>
      <div className='container__box'>
        <h1>
          <Link to='/'>
            <img src='assets/image/logos/largeLogo.svg' alt='랜딩 페이지로 이동하려면 클릭' />
          </Link>
        </h1>
        <h3>첫 방문을 환영합니다!</h3>
        <form>
          <AuthInput id='email' name='email' type='email' placeholder='이메일을 입력해 주세요.' label='이메일' />
          <AuthInput id='nickname' name='nickname' type='text' placeholder='닉네임을 입력해 주세요.' label='닉네임' />
          <AuthInput
            id='password'
            name='password'
            type='password'
            password
            placeholder='8자 이상 입력해 주세요'
            label='비밀번호'
          />
          <AuthInput
            id='password'
            name='password'
            type='password'
            password
            placeholder='비밀번호를 한번 더 입력해 주세요'
            label='비밀번호 확인'
          />
          <div className='form__agreement-checkbox'>
            <input type='checkbox' name='agree' id='agree' />
            <label htmlFor='agree'>이용약관에 동의합니다.</label>
          </div>
          <div className='form__submit-button'>
            <FullButton disabled>가입하기</FullButton>
          </div>
        </form>
        <h5>
          이미 가입하셨나요? <Link to='/sign-in'>로그인하기</Link>
        </h5>
      </div>
    </StSignInContainer>
  );
};

export default SignUp;
