import { ReactNode } from 'react';
import Button from './style';

interface Props {
  children: ReactNode;
}

const AddColumnButton = ({ children }: Props) => {
  return (
    <Button>
      {children}
      <img src='/assets/image/icons/bannerAddIcon.svg' />
    </Button>
  );
};

export default AddColumnButton;
