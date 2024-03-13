import { ReactNode } from 'react';
import Button from './style';

interface Props {
  children: ReactNode;
  createColumns: () => void;
}

const AddColumnButton = ({ children, createColumns }: Props) => {
  return (
    <Button type='button' onClick={createColumns}>
      {children}
      <img src='/assets/image/icons/bannerAddIcon.svg' alt='add-icon' />
    </Button>
  );
};

export default AddColumnButton;
