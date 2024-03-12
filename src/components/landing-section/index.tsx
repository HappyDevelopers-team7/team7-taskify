import { LandingImage } from '@/pages/landing';
import { StSectionRightImage, StSectionLeftImage } from './style';

const SectionRightImage = () => {
  return (
    <StSectionRightImage className='landing-wide-section-right-image'>
      <div className='point-and-description'>
        <div className='section-point'>Point 1</div>
        <div className='section-description'>
          일의 <span>우선순위</span>를<br /> 관리하세요
        </div>
      </div>
      <LandingImage src='assets\image\images\landingImage1.svg' alt='Taskify' />
    </StSectionRightImage>
  );
};

const SectionLeftImage = () => {
  return (
    <StSectionLeftImage className='landing-wide-section-left-image'>
      <LandingImage src='assets\image\images\landingImage2.svg' alt='Taskify' />
      <div className='point-and-description'>
        <div className='section-point'>Point 2</div>
        <div className='section-description'>
          해야 할 일을 <br />
          등록하세요
        </div>
      </div>
    </StSectionLeftImage>
  );
};

const SmallSection = () => {
  return (
    <div className='landing-small-section'>
      생산성을 높이는 다양한 설정
      <SettingItem
        src='assets\image\images\landingImage3.svg'
        alt='Taskify'
        title='대시보드 설정'
        description='대시보드 사진과 이름을 변경할 수 있어요.'
      />
      <SettingItem
        src='assets\image\images\landingImage4.svg'
        alt='Taskify'
        title='초대'
        description='새로운 팀원을 초대할 수 있어요.'
      />
      <SettingItem
        src='assets\image\images\landingImage5.svg'
        alt='Taskify'
        title='구성원'
        description='구성원을 초대하고 내보낼 수 있어요.'
      />
    </div>
  );
};

const SettingItem = ({ src, alt, title, description }) => {
  return (
    <div>
      <img src={src} alt={alt} />
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export const Section = () => {
  return (
    <>
      <SectionRightImage />
      <SectionLeftImage />
      <SmallSection />
    </>
  );
};
