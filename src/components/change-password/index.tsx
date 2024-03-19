import { StPasswordContainer, StPasswordInputContainer } from './style';
import { useState } from 'react';
import { PutPassword } from '@/api/putPassword';

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChangeCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value);
  const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value);
  const handleChangeConfirmNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmNewPassword(e.target.value);
  const handleSubmit = async () => {
    try {
      if (!currentPassword || !newPassword || !confirmNewPassword) {
        setErrorMessage('모든 필드를 입력하세요.');
        return;
      }

      if (newPassword !== confirmNewPassword) {
        setErrorMessage('새 비밀번호가 일치하지 않습니다.');
        return;
      }

      const response = await PutPassword(currentPassword, newPassword);
      if (response?.status === 200) {
        setSuccessMessage('비밀번호가 성공적으로 변경되었습니다.');
        alert(successMessage);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        setErrorMessage('비밀번호 변경에 실패했습니다.');
        alert(errorMessage);
      }
    } catch (error) {
      alert(errorMessage);
      console.error('비밀번호 변경 중 오류 발생:', error);
    }
  };

  return (
    <StPasswordContainer>
      <h1>비밀번호 변경</h1>
      <div className='profile-small-title'>현재 비밀번호</div>
      <StPasswordInputContainer>
        <input
          type='password'
          value={currentPassword}
          onChange={handleChangeCurrentPassword}
          placeholder='현재 비밀번호 입력'
        />
      </StPasswordInputContainer>
      <div className='profile-small-title'>새 비밀번호</div>
      <StPasswordInputContainer>
        <input type='password' value={newPassword} onChange={handleChangeNewPassword} placeholder='새 비밀번호 입력' />
      </StPasswordInputContainer>
      <div className='profile-small-title'> 새 비밀번호 확인</div>
      <StPasswordInputContainer>
        <input
          type='password'
          value={confirmNewPassword}
          onChange={handleChangeConfirmNewPassword}
          placeholder='새 비밀번호 입력'
        />
      </StPasswordInputContainer>
      <div className='button-container'>
        <button type='submit' onClick={handleSubmit}>
          변경
        </button>
      </div>
    </StPasswordContainer>
  );
};
