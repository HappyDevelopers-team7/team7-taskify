import ModalContainer from '@/components/modal-container';
// import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/redux/modalSlice';
import StEditCard from './style';
import { ColumnToCardProps } from '@/types/columnToCardProps';

const EditCard = ({ card }: ColumnToCardProps) => {
  const dispatch = useDispatch();

  const handleCloseEditCardModal = () => {
    dispatch(closeModal());
    console.log(card);
  };

  const handleSubmitEditCardModal = () => {
    alert('수정완료');
    dispatch(closeModal());
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
      <StEditCard $Image={card.imageUrl}>
        <div className='first-div'>
          <div>
            <h3>상태</h3>
            <input className='input-box status-box' />
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
