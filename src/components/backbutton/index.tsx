import { useNavigate } from 'react-router-dom';
import { StBackButton } from './style';

function BackButton() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StBackButton onClick={handleGoBack}>
      <img className='back-button' src='/assets\image\icons\backArrowIcon.svg' alt='뒤로가기 아이콘' />
      돌아가기
    </StBackButton>
  );
}

export default BackButton;
