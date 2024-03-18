import { ReactNode } from 'react';
import Button from './style';
import { useDispatch } from 'react-redux';
import { openModal } from '@/redux/modalSlice';

interface Props {
  children: ReactNode;
}

const AddColumnButton = ({ children }: Props) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(openModal('addColumnModal'));
  };
  
return (
    <Button type='button' onClick={handleButtonClick}>
      {children}
      <img src='/assets/image/icons/bannerAddIcon.svg' alt='add-icon' />
    </Button>
  );
};

export default AddColumnButton;
