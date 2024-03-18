import { Link } from 'react-router-dom';
import {
  StMyPageContainer,
  StProfileInput,
  StPasswordInputContainer,
  StProfileContainer,
  StPasswordContainer,
} from './style';
// export const MyPageImg = ({ src, alt }: imageSrcType) => {
//   return <img src={src} alt={alt} />;
// };

const MyPage = () => {
  return (
    <StMyPageContainer>
      <Link to='/'>
        <img className='back-button' src='assets\image\icons\backArrowIcon.svg' alt='돌아가기 이미지' />
        돌아가기
      </Link>
      <StProfileContainer>
        <h1>프로필</h1>
        <div className='profile-container'>
          <img src='assets\image\icons\addIconPurple.svg' alt='이미지 추가 + 버튼 이미지' />
          <div className='profile-input-container'>
            <div className='profile-small-title'>이메일</div>
            <StProfileInput>
              <input />
            </StProfileInput>
            <div className='profile-small-title'>닉네임</div>
            <StProfileInput>
              <input />
            </StProfileInput>
          </div>
        </div>
        <div className='button-container'>
          <button type='submit'>저장</button>
        </div>
      </StProfileContainer>

      <StPasswordContainer>
        <h1>비밀번호 변경</h1>
        <div className='profile-small-title'>현재 비밀번호</div>
        <StPasswordInputContainer>
          <input />
        </StPasswordInputContainer>
        <div className='profile-small-title'>새 비밀번호</div>
        <StPasswordInputContainer>
          <input />
        </StPasswordInputContainer>
        <div className='profile-small-title'> 새 비밀번호 확인</div>
        <StPasswordInputContainer>
          <input />
        </StPasswordInputContainer>
        <div className='button-container'>
          <button type='submit'>변경</button>
        </div>
      </StPasswordContainer>
    </StMyPageContainer>
  );
};

export default MyPage;
