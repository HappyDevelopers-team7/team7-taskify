import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StMyPageContainer, StProfileInput, StProfileContainer, StProfileInputReadOnly } from './style';
import { PutUserInformation } from '@/api/putUserInformation';
import { PostProfileImage } from '@/api/postProfileImage';
import { GetUserData } from '@/api/getUserData';
import { ChangePassword } from '@/components/change-password';

const MyPage = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string>('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userData = await GetUserData();
      setEmail(userData.email);
      setNickname(userData.nickname);
      if (userData.profileImageUrl) {
        setProfileImageUrl(userData.profileImageUrl);
      }
    } catch (error) {
      console.error('사용자 정보를 불러오는 중 오류 발생:', error);
    }
  };

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
        if (uploadResponse && uploadResponse.data && uploadResponse.data.profileImageUrl) {
          imageUrl = uploadResponse.data.profileImageUrl;
        } else {
          throw new Error('이미지 업로드 실패');
        }
      }
      const putInformResponse = await PutUserInformation(nickname, imageUrl);
      if (putInformResponse) {
        fetchUserData();
        window.location.reload();
        alert('프로필 정보가 업데이트 되었습니다.');
      } else {
        alert('프로필 정보 업데이트에 실패했습니다.');
      }
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
      alert('프로필 정보 업데이트 중 오류가 발생했습니다.');
    }
  };

  GetUserData;

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
            <StProfileInputReadOnly>
              <input value={email} readOnly />
            </StProfileInputReadOnly>
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
      <ChangePassword />
    </StMyPageContainer>
  );
};

export default MyPage;
