import { MouseEvent } from 'react';
import StColumnNameTag from './style';

interface ColumnNameTagProps {
  name: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const ColumnNameTag = ({ name, onClick }: ColumnNameTagProps) => {
  return (
    <StColumnNameTag onClick={onClick}>
      <span>{name}</span>
    </StColumnNameTag>
  );
};

export default ColumnNameTag;
