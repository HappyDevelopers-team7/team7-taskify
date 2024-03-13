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

/**
 * 예시는 dashboard 페이지 참고.
 * @param {string} title - 모달 대제목
 * @param {string} closeButtonName - 모달 닫는 버튼 이름
 * @param {string} submitButtonName - 모달 submit 동작 버튼 이름
 * @param {number} modalWidth - 모달의 너비 (웹 사이즈를 적으세요)
 * @param {ReactNode} children - 모달의 컨텐트 영역
 * @param {MouseEvent} handleCloseModal - 모달 닫을 때 함수
 * @param {MouseEvent} handleSubmitModal - 모달 submit 함수
 * @returns
 */
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
