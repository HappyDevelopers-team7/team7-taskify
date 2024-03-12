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
  children,
  modalWidth = 506,
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
            <button type='button' onClick={handleCloseModal}>
              {closeButtonName}
            </button>
            <button type='button' onClick={handleSubmitModal}>
              {submitButtonName}
            </button>
          </div>
        </div>
      </StModalContainer>
    </PortalContainer>
  );
};

export default ModalContainer;
