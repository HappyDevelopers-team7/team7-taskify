import StColumnNameTag from './style';

interface ColumnNameTagProps {
  name: string;
}

const ColumnNameTag = ({ name }: ColumnNameTagProps) => {
  return (
    <StColumnNameTag>
      <span>{name}</span>
    </StColumnNameTag>
  );
};

export default ColumnNameTag;
