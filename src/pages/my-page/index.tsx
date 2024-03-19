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
import { PostProfileImage } from '@/api/postProfileImage';

const MyPage = () => {
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string>('');

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleProfileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setProfileImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImageUrl(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitInformation = async () => {
    try {
      let imageUrl = profileImageUrl;
      if (profileImage) {
        const formData = new FormData();
        formData.append('image', profileImage);
        const uploadResponse = await PostProfileImage(formData);
        console.log(uploadResponse);
        if (uploadResponse && uploadResponse.data && uploadResponse.data.profileImageUrl) {
          imageUrl = uploadResponse.data.profileImageUrl;
        } else {
          throw new Error('이미지 업로드 실패');
        }
      }
      const putInformResponse = await PutUserInformation(nickname, imageUrl);
      if (putInformResponse) {
        alert('프로필 정보가 업데이트 되었습니다.');
      } else {
        alert('프로필 정보 업데이트에 실패했습니다.');
      }
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
      alert('프로필 정보 업데이트 중 오류가 발생했습니다.');
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
          <img
            src={profileImageUrl || 'assets/image/icons/addIconPurple.svg'}
            alt='프로필 이미지'
            onClick={() => document.getElementById('profileImageInput')?.click()}
          />
          <input id='profileImageInput' type='file' accept='image/*' onChange={handleProfileImageChange} />
          <div className='profile-input-container'>
            <div className='profile-small-title'>이메일</div>
            <StProfileInput>
              <input placeholder='이메일 정보 받아오기@@@@@@@@' />
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
