import fullButtonProps from './fullButtonType';
import StFullButton from './style';

// TODO : onClickHandler 추가 필요
const FullButton = ({ disabled, children }: fullButtonProps) => {
  return (
    <>
      <StFullButton className={disabled ? '' : 'active'}>
        <span>{children}</span>
      </StFullButton>
    </>
  );
};

export default FullButton;
