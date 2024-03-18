import CardContainer from './style';
import TagComponent from '../tag-component';
import { ColumnToCardProps } from '@/types/columnToCardProps';
import { useDispatch, useSelector } from 'react-redux';
import { ModalRootState, openModal, setOpenModalName } from '@/redux/modalSlice';
import EditCard from '../modal-contents/edit-card';

const Card = ({ card }: ColumnToCardProps) => {
  const dispatch = useDispatch();
  const colorArray = ['#ff0000', '#29c936', '#ff8c00', '#000000', '#008000', '#f122f1', '#0000ff'];
  const openModalName = useSelector((state: ModalRootState) => state.modal.openModalName);

  const handleClickEditCard = () => {
    dispatch(setOpenModalName(`editCard${card.id}`));
    dispatch(openModal(`editCard${card.id}`));
  };

  return (
    <CardContainer>
      {
        </*임시용 꼭 지울것*/ button className='모달수정용임시버튼' onClick={handleClickEditCard}>
          수정
        </button>
      }
      {card.imageUrl !== null && <img src={card.imageUrl} className='image-box' alt='card-image' />}
      <h2 className='title-box'>{card.title}</h2>
      <div className='tag-box'>
        {card.tags.length > 0 &&
          card.tags.map((tag, index) => (
            <TagComponent
              key={card.tags.indexOf(tag)}
              id={card.tags.indexOf(tag)}
              name={tag}
              backgroundColor={colorArray[index % colorArray.length]}
            />
          ))}
      </div>
      {card.dueDate && (
        <div className='date-box'>
          <img src='/assets/image/icons/calendarIcon.svg' />
          <span>{card.dueDate}</span>
        </div>
      )}
      {card.assignee && (
        <img
          className='asignee-box'
          src={
            card.assignee.profileImageUrl ? card.assignee.profileImageUrl : '/assets/image/icons/bannerLogoIconXL.svg'
          }
          alt='user-image'
        />
      )}
      {openModalName === `editCard${card.id}` ? <EditCard card={card} /> : null}
    </CardContainer>
  );
};

export default Card;
