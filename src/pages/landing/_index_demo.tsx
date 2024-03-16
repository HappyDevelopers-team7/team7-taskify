import styled from 'styled-components';

const StLandingContainer = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
  align-items: center;

  .landing-navbar {
    height: 70px;
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 40px;

    .navbar-sign {
      width: 120px;
      margin: 20px;
      display: flex;
      justify-content: space-between;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
      margin-top: 100px;
    }

    h1 {
      color: ${({ theme }) => theme.color.white};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 7.6rem;
      font-weight: 700;
      line-height: 100px;
      letter-spacing: -2px;
      margin: 50px auto;

      span {
        color: ${({ theme }) => theme.color.violet};
        font-family: Montserrat;
        font-size: 9rem;
        font-weight: 700;
        letter-spacing: -1px;
      }
    }

    h3 {
      color: ${({ theme }) => theme.color.white};
      text-align: center;
      font-family: Pretendard;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -1px;
    }

    button {
      color: ${({ theme }) => theme.color.white};
      text-align: center;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      display: flex;
      width: 280px;
      padding: 15px 0px 14px 0px;
      margin: 65px 180px auto;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background: ${({ theme }) => theme.color.violet};
    }
  }

  .landing-wide-section-right-image {
    justify-content: space-between;
  }

  .landing-wide-section-left-image {
    width: 1200px;
    height: 600px;
    margin: 90px auto;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--black-black_171717, #171717);
    display: flex;

    .point-and-description {
      display: flex;
      flex-direction: column;
    }

    .section-point {
      color: var(--gray-gray_9FA6B2, #9fa6b2);
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-family: Pretendard;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin: 100px 60px 0;
    }

    .section-description {
      color: var(--white-white_FFFFFF, #fff);
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-family: Pretendard;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 64px; /* 133.333% */
      margin-left: 60px;
      margin-top: 100px;

      span {
        color: var(--gray-gray_D9D9D9, #d9d9d9);
        font-feature-settings:
          'clig' off,
          'liga' off;
        font-family: Pretendard;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px;
      }
    }

    img {
      display: flex;
      /* width: 594px;
      height: 497.487px; */
      justify-content: center;
      align-items: right;
      flex-shrink: 0;
      margin-top: auto;
      margin-left: 108px;
    }
  }
`;

export default StLandingContainer;

import StLandingContainer from './style';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <StLandingContainer>
      <div className='landing-navbar'>
        <Link to='/'>
          <img src='\assets\image\logos\whiteLogo.svg' />
        </Link>
        <div className='navbar-sign'>
          <Link to='/sign-in'>로그인</Link>
          <Link to='/sign-up'>회원가입</Link>
        </div>
      </div>
      <div className='header'>
        <img src='assets\image\images\landingMainImage1(desktop).svg' alt='Taskify 메인 이미지' />
        <h1>
          새로운 일정 관리 <span>Taskify</span>
        </h1>
        <h3>서비스 메인 설명 들어갑니다.</h3>
        <Link to='/sign-in'>
          <button type='button'>로그인하기</button>
        </Link>
      </div>
      <div className='landing-wide-section-right-image'>
        <div className='point-and-description'>
          <div className='section-point'>Point 1</div>
          <div className='section-description'>
            일의 <span>우선순위</span>를<br /> 관리하세요
          </div>
        </div>
        <img src='assets\image\images\landingImage1.svg' alt='Taskify' />
      </div>
      <div className='landing-wide-section-left-image'>
        <img src='assets\image\images\landingImage2.svg' alt='Taskify' />
        <div className='point-and-description'>
          <div className='section-point'>Point 2</div>
          <div className='section-description'>
            해야 할 일을 <br />
            등록하세요
          </div>
        </div>
      </div>
      <div className='landing-small-section'>
        생산성을 높이는 다양한 설정
        <div>
          <img src='assets\image\images\landingImage3.svg' alt='Taskify' />
          <div>대시보드 설정</div>
          <div>대시보드 사진과 이름을 변경할 수 있어요. </div>
        </div>
        <div>
          <img src='assets\image\images\landingImage4.svg' alt='Taskify' />
          <div>초대</div>
          <div>새로운 팀원을 초대할 수 있어요. </div>
        </div>
        <div>
          <img src='assets\image\images\landingImage5.svg' alt='Taskify' />
          <div>구성원</div>
          <div>구성원을 초대하고 내보낼 수 있어요.</div>
        </div>
      </div>
      <div className='landing-footer'>
        <div>©codeit - 2023</div>
        <div>
          <div>Privacy Poicy</div>
          <div>FAQ</div>
        </div>
      </div>
    </StLandingContainer>
  );
};

export default Landing;
