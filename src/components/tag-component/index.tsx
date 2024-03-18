import StTagComponent from './style';

type Tag = {
  name: string;
  backgroundColor: string;
  id: number;
};

const TagComponent = ({ name, backgroundColor }: Tag) => {
  return <StTagComponent $backgroundColor={backgroundColor}>{name}</StTagComponent>;
};

export default TagComponent;
