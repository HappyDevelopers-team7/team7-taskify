import Lottie from 'lottie-react';
import loadingBoxesAnimation from './loadingAnimation.json';
import StLoadingSpinnerContainer from './style';

const LoadingSpinner = () => {
  return (
    <StLoadingSpinnerContainer>
      <Lottie animationData={loadingBoxesAnimation} />
    </StLoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
