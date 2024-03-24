import StArrowDiv from './style';

interface Props {
  onLeftClick?: () => void;
  onRightClick?: () => void;
  leftDisabled?: boolean;
  rightDisabled?: boolean;
}

const ArrowButton = ({ onLeftClick, onRightClick, leftDisabled, rightDisabled }: Props) => {
  const leftArrow = leftDisabled ? 'arrow_disable' : 'arrow_enable';
  const rightArrow = rightDisabled ? 'arrow_disable' : 'arrow_enable';

  return (
    <StArrowDiv>
      <button onClick={onLeftClick} className={leftArrow} disabled={leftDisabled}>
        {leftArrow === 'arrow_enable' ? (
          <img src='/assets/image/icons/arrowForwardIconLeft.svg' alt='add-icon' />
        ) : (
          <img src='/assets/image/icons/arrowForwardIconGrayLeft.svg' alt='add-icon' />
        )}
      </button>
      <button onClick={onRightClick} className={rightArrow} disabled={rightDisabled}>
        {rightArrow === 'arrow_enable' ? (
          <img src='/assets/image/icons/arrowForwardIcon.svg' alt='add-icon' />
        ) : (
          <img src='/assets/image/icons/arrowForwardIconGray.svg' alt='add-icon' />
        )}
      </button>
    </StArrowDiv>
  );
};

export default ArrowButton;
