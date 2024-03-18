import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StMyPageContainer,
  StProfileInput,
  StPasswordInputContainer,
  StProfileContainer,
  StPasswordContainer,
} from './style';
import { PutUserInformation } from '@/api/putUserInformation';

const MyPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmitInformation = async () => {
    try {
      // PUT 요청으로 개인정보 업데이트
      const response = await PutUserInformation(email, nickname);
      console.log(response); // 성공한 경우 응답 데이터를 출력하거나 다른 작업 수행
      alert('개인정보가 업데이트되었습니다.');
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
      alert('개인정보 업데이트 중 오류가 발생했습니다.');
    }
  };

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
              <input placeholder='johndoe@gmail.com' value={email} onChange={handleEmailChange} />
            </StProfileInput>
            <div className='profile-small-title'>닉네임</div>
            <StProfileInput>
              <input placeholder='닉네임을 입력해주세요' value={nickname} onChange={handleNicknameChange} />
            </StProfileInput>
          </div>
        </div>
        <div className='button-container'>
          <button type='submit' onClick={handleSubmitInformation}>
            저장
          </button>
        </div>
      </StProfileContainer>

      <StPasswordContainer>
        <h1>비밀번호 변경</h1>
        <div className='profile-small-title'>현재 비밀번호</div>
        <StPasswordInputContainer>
          <input placeholder='현재 비밀번호 입력' />
        </StPasswordInputContainer>
        <div className='profile-small-title'>새 비밀번호</div>
        <StPasswordInputContainer>
          <input placeholder='새 비밀번호 입력' />
        </StPasswordInputContainer>
        <div className='profile-small-title'> 새 비밀번호 확인</div>
        <StPasswordInputContainer>
          <input placeholder='새 비밀번호 입력' />
        </StPasswordInputContainer>
        <div className='button-container'>
          <button type='submit'>변경</button>
        </div>
      </StPasswordContainer>
    </StMyPageContainer>
  );
};

export default MyPage;
