import { FormEvent, MouseEvent, ReactNode } from 'react';
import PortalContainer from '../portal';
import StModalContainer from './style';
import DropDownMenu from '../drop-down-menu';

interface ModalProps {
  type?: string;
  title?: string;
  closeButtonName?: string;
  submitButtonName?: string;
  isDeletable?: boolean;
  modalWidth?: number;
  children: ReactNode;
  handleCloseModal?: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  handleDeleteModal?: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  handleEditModal?: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  handleSubmitModal?: (e: FormEvent<HTMLButtonElement>) => void;
}

/**
 * 예시는 dashboard 페이지 참고.
 * @param {string} type - 모달 타입 (default, detail)
 * @param {string} title - 모달 대제목
 * @param {string} closeButtonName - 모달 닫는 버튼 이름
 * @param {string} submitButtonName - 모달 submit 동작 버튼 이름
 * @param {boolean} isDeletable - 삭제 버튼 유무 (false가 디폴트)
 * @param {number} modalWidth - 모달의 너비 (웹 사이즈를 적으세요)
 * @param {ReactNode} children - 모달의 컨텐트 영역
 * @param {MouseEvent} handleCloseModal - 모달 닫을 때 함수
 * @param {MouseEvent} handleSubmitModal - 모달 submit 함수
 * @param {MouseEvent} handleEditModal - 모달 edit 함수
 * @param {MouseEvent} handleClickDeleteCard - 모달 submit 함수
 * @returns
 */
const ModalContainer = ({
  type = 'default',
  title,
  closeButtonName,
  submitButtonName,
  modalWidth,
  isDeletable = false,
  children,
  handleCloseModal,
  handleDeleteModal,
  handleEditModal,
  handleSubmitModal,
}: ModalProps) => {
  switch (type) {
    case 'detail':
      return (
        <PortalContainer>
          <StModalContainer $type={type} $modalWidth={modalWidth} role='dialog' aria-modal='true' tabIndex={0}>
            <div className='modal-dim' onClick={handleCloseModal}></div>
            <div className='modal-content'>
              <div className='detail-header'>
                <h2>{title ? title : '카드 상세글 보기'}</h2>
                <div className='detail-button-group'>
                  <DropDownMenu buttonImageUrl='/assets/image/icons/moreButtonIcon.svg'>
                    <li>
                      <button type='button' onClick={handleDeleteModal}>
                        삭제하기
                      </button>
                    </li>
                    <li>
                      <button type='button' onClick={handleEditModal}>
                        수정하기
                      </button>
                    </li>
                  </DropDownMenu>
                  <button
                    className='detail-close-button'
                    type='button'
                    aria-label='닫기 버튼'
                    onClick={handleCloseModal}
                  >
                    <img src='/assets/image/icons/closeIcon.svg' />
                  </button>
                </div>
              </div>

              <div className='modal-content__box'>{children}</div>
            </div>
          </StModalContainer>
        </PortalContainer>
      );

    default:
      return (
        <PortalContainer>
          <StModalContainer $modalWidth={modalWidth} role='dialog' aria-modal='true' tabIndex={0}>
            <div className='modal-dim' onClick={handleCloseModal}></div>
            <div className='modal-content'>
              {title ? <h2>{title}</h2> : null}

              <div className='modal-content__box'>{children}</div>
              <div className='modal-button-group'>
                <div className='delete-button-box'>
                  {isDeletable ? (
                    <button type='button' onClick={handleDeleteModal}>
                      삭제하기
                    </button>
                  ) : null}
                </div>
                <div className='submit-button-box'>
                  <button className='modal-button__close' type='button' onClick={handleCloseModal}>
                    {closeButtonName}
                  </button>
                  <button className='modal-button__submit' type='submit' onClick={handleSubmitModal}>
                    {submitButtonName}
                  </button>
                </div>
              </div>
            </div>
          </StModalContainer>
        </PortalContainer>
      );
  }
};

export default ModalContainer;
