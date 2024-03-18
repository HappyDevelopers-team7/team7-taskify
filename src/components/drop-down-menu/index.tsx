import { ReactNode, useState } from 'react';
import StDropDownMenu from './style';

interface DropDownMenuProps {
  buttonImageUrl: string;
  children: ReactNode;
}

const DropDownMenu = ({ buttonImageUrl, children }: DropDownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <StDropDownMenu>
      <button className='more-button' type='button' aria-label='더보기 버튼' onClick={handleClickOpen}>
        <img src={buttonImageUrl} alt='더보기 버튼' />
      </button>
      {isOpen ? (
        <ul className='drop-down-menu'>
          {/* children에는 반드시 li를 넣어야함. */}
          {children}
          {/* 아래 두줄은 예시임. */}
          {/* <li><button onClick={handleClick}>삭제하기</button></li> */}
          {/* <li><button onClick={handleClick}>수정하기</button></li> */}
        </ul>
      ) : null}
    </StDropDownMenu>
  );
};

export default DropDownMenu;
