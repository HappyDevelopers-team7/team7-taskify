import StTagComponent from './style';
import { MouseEvent } from 'react';

type Tag = {
  name: string;
  backgroundColor: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

const TagComponent = ({ name, backgroundColor, onClick }: Tag) => {
  return (
    <StTagComponent $backgroundColor={backgroundColor} onClick={onClick} className='remove'>
      {name}
    </StTagComponent>
  );
};

export default TagComponent;
