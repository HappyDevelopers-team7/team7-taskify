import { Link } from 'react-router-dom';
import { StHeader, StSmallDescription } from './style';
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
  return <StSmallDescription>{children}</StSmallDescription>;
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
        <p>Taskify는 할일을 등록하고, 진행 상황을 체계적으로 관리하도록 도와줍니다.</p>
        <p>팀원을 초대하고 추가함으로써, 업무 과정을 실시간으로 공유할 수 있습니다.</p>
        <p>더 이상 업무 관리에 시간을 낭비하지 말고, Taskify하세요!</p>
      </Description>
      <Link to='/sign-in'>
        <MediumButton type='button'>로그인하기</MediumButton>
      </Link>
    </StHeader>
  );
};
