import { Link } from 'react-router-dom';
import { LandingImage } from '@/pages/landing';
import { StNavbar, StNavbarSigninSignup } from './style';

const SignInandUpLinks = () => {
  return (
    <StNavbarSigninSignup>
      <Link to='/sign-in'>로그인</Link>
      <Link to='/sign-up'>회원가입</Link>
    </StNavbarSigninSignup>
  );
};

// Navbar 컴포넌트 정의
export const Navbar = () => {
  return (
    <StNavbar>
      <Link to='/'>
        <LandingImage src='\assets\image\logos\whiteLogo.svg' alt='Taskify 로고 이미지' />
      </Link>
      <SignInandUpLinks />
    </StNavbar>
  );
};
