import { useState } from 'react';
import StDropDownMenu from './style';

interface DropDownMenuProps {
  buttonImageUrl: string;
}

const DropDownMenu = ({ buttonImageUrl }: DropDownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <StDropDownMenu>
      <button type='button' aria-label='더보기 버튼' onClick={handleClickOpen}>
        <img src={buttonImageUrl} />
      </button>
      {isOpen ? (
        <ul className='drop-down-menu'>
          <li>삭제하기</li>
          <li>수정하기</li>
        </ul>
      ) : null}
    </StDropDownMenu>
  );
};

export default DropDownMenu;
