import { Link } from 'react-router-dom';
import { StFooter, StSnsIconList } from './style';
import { LandingImage } from '@/pages/landing';

const SnsIconList = () => {
  return (
    <>
      <Link to=''>
        <LandingImage src='assets\image\icons\emailIcon.svg' alt='email 아이콘' />
      </Link>
      <Link to=''>
        <LandingImage src='assets\image\icons\facebookIcon.svg' alt='facebook 아이콘' />
      </Link>
      <Link to=''>
        <LandingImage src='assets\image\icons\instagramIcon.svg' alt='instagram 아이콘' />
      </Link>
    </>
  );
};

export const Footer = () => {
  return (
    <StFooter>
      <div>©codeit - 2023</div>
      <div className='footer-center'>
        <div>Privacy Poicy</div>
        <div>FAQ</div>
      </div>
      <StSnsIconList>
        <SnsIconList />
      </StSnsIconList>
    </StFooter>
  );
};
