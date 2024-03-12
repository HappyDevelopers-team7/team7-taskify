import { ReactNode } from 'react';
import Button from './style';

interface Props {
  children: ReactNode;
  createColumns: () => void;
}

const AddColumnButton = ({ children, createColumns }: Props) => {
  return (
    <Button onClick={createColumns}>
      {children}
      <img src='/assets/image/icons/bannerAddIcon.svg' />
    </Button>
  );
};

export default AddColumnButton;
