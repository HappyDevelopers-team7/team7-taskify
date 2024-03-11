import fullButtonProps from './fullButtonType';
import StFullButton from './style';

// TODO : onClickHandler 추가 필요
const FullButton = ({ disabled, children }: fullButtonProps) => {
  return (
    <>
      <StFullButton disabled={disabled}>
        <span>{children}</span>
      </StFullButton>
    </>
  );
};

export default FullButton;
