import { Link } from 'react-router-dom';
import { StHeader } from './style';
import { LandingImage } from '@/pages/landing';
import { ReactNode } from 'react';

interface MediumButtonProps {
  children: ReactNode;
  type?: 'button';
}

const Title = () => {
  return (
    <h1>
      새로운 일정 관리 <span>Taskify</span>
    </h1>
  );
};

const Description = ({ children }: MediumButtonProps) => {
  return <h3>{children}</h3>;
};

const MediumButton = ({ children, type }: MediumButtonProps) => {
  return <button type={type}>{children}</button>;
};

export const Header = () => {
  return (
    <StHeader>
      {window.innerWidth >= 375 && window.innerWidth <= 767 ? (
        <LandingImage src='public\assets\image\images\landingMainImageMobile.png' alt='Taskify 메인 이미지' />
      ) : (
        <LandingImage src='assets\image\images\landingMainImageDesktop.png' alt='Taskify 메인 이미지' />
      )}
      <Title />
      <Description>
        <h3>서비스 메인 설명 들어갑니다.</h3>
      </Description>
      <Link to='/sign-in'>
        <MediumButton type='button'>로그인하기</MediumButton>
      </Link>
    </StHeader>
  );
};
