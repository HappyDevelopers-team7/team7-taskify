import { MouseEvent, ReactNode } from 'react';
import PortalContainer from '../portal';
import StModalContainer from './style';

interface ModalProps {
  title: string;
  closeButtonName: string;
  submitButtonName: string;
  modalWidth?: number;
  children: ReactNode;
  handleCloseModal: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  handleSubmitModal: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

const ModalContainer = ({
  title,
  closeButtonName,
  submitButtonName,
  modalWidth,
  children,
  handleCloseModal,
  handleSubmitModal,
}: ModalProps) => {
  return (
    <PortalContainer>
      <StModalContainer $modalWidth={modalWidth}>
        <div className='modal-dim' onClick={handleCloseModal}></div>
        <div className='modal-content'>
          <h2>{title}</h2>
          {children}
          <div className='modal-button-group'>
            <button className='modal-button__close' type='button' onClick={handleCloseModal}>
              {closeButtonName}
            </button>
            <button className='modal-button__submit' type='button' onClick={handleSubmitModal}>
              {submitButtonName}
            </button>
          </div>
        </div>
      </StModalContainer>
    </PortalContainer>
  );
};

export default ModalContainer;
