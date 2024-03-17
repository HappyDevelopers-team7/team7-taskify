import { ReactNode } from 'react';
import Button from './style';

interface Props {
  children: ReactNode;
}

const AddColumnButton = ({ children }: Props) => {
  return (
    <Button type='button'>
      {children}
      <img src='/assets/image/icons/bannerAddIcon.svg' alt='add-icon' />
    </Button>
  );
};

export default AddColumnButton;
