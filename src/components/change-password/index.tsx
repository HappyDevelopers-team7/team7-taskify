import { useEffect, useState } from 'react';
import { PutPassword } from '@/api/putPassword';
import { StPasswordContainer, StPasswordInputContainer } from './style';
import { toast } from 'react-toastify';

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleChangeCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value);
  const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value);
  const handleChangeConfirmNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmNewPassword(e.target.value);

  const checkInputValues = () => {
    if (currentPassword && newPassword && confirmNewPassword) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  useEffect(() => {
    checkInputValues();
  }, [currentPassword, newPassword, confirmNewPassword]);

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
        toast.error('모든 필드를 입력하세요.');
        return;
      }

      if (newPassword !== confirmNewPassword) {
        toast.error('새 비밀번호가 일치하지 않습니다.');
        return;
      }

      const response = await PutPassword(currentPassword, newPassword);
      if (response?.status === 204) {
        toast.error('비밀번호가 성공적으로 변경되었습니다.');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        toast.error('비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('비밀번호 변경 중 오류 발생:', error);
      toast.error('비밀번호 변경 중 오류가 발생했습니다.');
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
      <StPasswordInputContainer style={{ border: confirmPasswordError && '1px solid red' }}>
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
        <button
          type='submit'
          onClick={handleSubmit}
          style={{
            backgroundColor: isButtonActive ? '#5534DA' : '#9FA6B2',
            cursor: isButtonActive ? 'pointer' : 'default',
          }}
        >
          변경
        </button>
      </div>
    </StPasswordContainer>
  );
};
