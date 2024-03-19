import ModalContainer from '@/components/modal-container';
// import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { MouseEvent, useState } from 'react';
import { closeModal } from '@/redux/modalSlice';
import StEditCard from './style';
import { CardObjectType } from '@/types/cardObjectType';
import ColumnNameTag from '@/components/column-name-tag';

const EditCard = ({ card, thisColumn, columns }: CardObjectType) => {
  const dispatch = useDispatch();
  const [selectedColumnName, setSelectedColumnName] = useState<string>(thisColumn.title);
  const [selectedColumnId, setSelectedColumnId] = useState<number>(thisColumn.id);
  const [isDropdownStatus, setIsDropdownStatus] = useState(false);
  const [isDropdownAsignee, setIsDropdownAsignee] = useState(false);

  console.log(selectedColumnId, isDropdownAsignee, setIsDropdownAsignee); //린트오류 방지용 임시코드

  const handleCloseEditCardModal = () => {
    dispatch(closeModal());
    console.log(card);
    console.log(columns);
    console.log(thisColumn);
  };

  const handleSubmitEditCardModal = () => {
    alert('수정완료');
    dispatch(closeModal());
  };

  const handleStatusDropdown = () => {
    setIsDropdownStatus((current) => !current);
  };

  const event = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const newColumnName = target.innerText;
    setSelectedColumnName(newColumnName);
    const newColumnId = columns.find((column) => column.title === selectedColumnName)?.id;
    if (newColumnId !== undefined) setSelectedColumnId(newColumnId);
    setIsDropdownStatus(false);
  };

  return (
    <ModalContainer
      title='할 일 수정'
      closeButtonName='취소'
      submitButtonName='수정'
      modalWidth={506}
      handleCloseModal={handleCloseEditCardModal}
      handleSubmitModal={handleSubmitEditCardModal}
    >
      <StEditCard $Image={card.imageUrl} $isStatusClicked={isDropdownStatus}>
        <div className='first-div'>
          <div>
            <h3>상태</h3>
            <div className='input-box status-box' onClick={handleStatusDropdown}>
              <ColumnNameTag name={selectedColumnName} />
            </div>
            <div className='input-box status-list'>
              {isDropdownStatus &&
                columns.map((column) => (
                  <div key={column.id}>
                    {selectedColumnName === column.title && (
                      <img src='/assets/image/icons/checkIcon.svg' alt='check-icon' />
                    )}
                    <ColumnNameTag name={column.title} onClick={(e) => event(e)} />
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h3>담당자</h3>
            <input className='input-box asignee-box' />
          </div>
        </div>
        <div>
          <h3>
            제목<span className='essential'> *</span>
          </h3>
          <input className='input-box' />
        </div>
        <div>
          <h3>
            설명<span className='essential'> *</span>
          </h3>
          <textarea className='input-box' />
        </div>
        <div>
          <h3>마감일</h3>
          <input className='input-box' />
        </div>
        <div>
          <h3>태그</h3>
          <input className='input-box' />
        </div>
        <div>
          <h3>이미지</h3>
          <div className='upload-button-box'>
            <label htmlFor='upload-button'>
              {card.imageUrl && (
                <img className='pencil-icon' src='/assets/image/icons/pencilIcon.svg' alt='edit-icon' />
              )}
            </label>
            <input type='file' accept='image/*' className='upload-button' id='upload-button' />
          </div>
        </div>
      </StEditCard>
    </ModalContainer>
  );
};

export default EditCard;
