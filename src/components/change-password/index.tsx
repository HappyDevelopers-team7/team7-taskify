import { useState } from 'react';
import { PutPassword } from '@/api/putPassword';
import { StPasswordContainer, StPasswordInputContainer } from './style';

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleChangeCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value);
  const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value);
  const handleChangeConfirmNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmNewPassword(e.target.value);

  const handleConfirmPasswordBlur = () => {
    if (newPassword !== confirmNewPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = async () => {
    try {
      if (!currentPassword || !newPassword || !confirmNewPassword) {
        alert('모든 필드를 입력하세요.');
        return;
      }

      if (newPassword !== confirmNewPassword) {
        alert('새 비밀번호가 일치하지 않습니다.');
        return;
      }

      const response = await PutPassword(currentPassword, newPassword);
      console.log(response);
      if (response?.status === 204) {
        alert('비밀번호가 성공적으로 변경되었습니다.');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        alert('비밀번호 변경에 실패했습니다.');
      }
    } catch (error) {
      console.error('비밀번호 변경 중 오류 발생:', error);
      alert('비밀번호 변경 중 오류가 발생했습니다.');
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
      <StPasswordInputContainer style={{ border: confirmPasswordError ? '1px solid red' : 'none' }}>
        <input
          type='password'
          value={confirmNewPassword}
          onChange={handleChangeConfirmNewPassword}
          onBlur={handleConfirmPasswordBlur}
          placeholder='새 비밀번호 입력'
        />
      </StPasswordInputContainer>
      {confirmPasswordError && <div style={{ color: 'red' }}>{confirmPasswordError}</div>}
      <div className='button-container'>
        <button type='submit' onClick={handleSubmit}>
          변경
        </button>
      </div>
    </StPasswordContainer>
  );
};
