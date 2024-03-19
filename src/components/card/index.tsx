import CardContainer from './style';
import TagComponent from '../tag-component';
import EditCard from '../modal-contents/edit-card';
import { useDispatch, useSelector } from 'react-redux';
import { ModalRootState, closeModal, openModal, setOpenModalName } from '@/redux/modalSlice';
import CardDetail from '../modal-contents/card-detail';
import { IdGroupType } from '@/types/idGroupType';
import DeleteAlert from '../modal-contents/delete-alert';
import { SecondModalRootState, closeSecondModal } from '@/redux/secondModalSlice';
import { deleteCard } from '@/api/deleteCard';
import { SIMPLE_MESSAGES } from '@/constants/message';
import { toast } from 'react-toastify';
import { Dispatch, SetStateAction } from 'react';
import { makeRandomBackgroundColor } from '@/utils/makeRandomBackgroundColor';
import { ColumnCardType } from '@/types/columnCardType';

interface CardProps {
  cardList: ColumnCardType[];
  setCardList: Dispatch<SetStateAction<ColumnCardType[] | undefined>>;
  idGroup: IdGroupType;
  card: ColumnCardType;
}

const Card = ({ cardList, setCardList, card, idGroup }: CardProps) => {
  const dispatch = useDispatch();
  const openModalName = useSelector((state: ModalRootState) => state.modal.openModalName);
  const openSecondModalName = useSelector((state: SecondModalRootState) => state.secondModal.openSecondModalName);

  const handleDeleteCard = async () => {
    try {
      await deleteCard(card.id);
      dispatch(closeSecondModal());
      dispatch(closeModal());
      const updatedCommentList = cardList?.filter((cardItem) => cardItem.id !== card.id);
      setCardList(updatedCommentList);
      return toast.success(SIMPLE_MESSAGES.DELETED);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickOpenDetail = () => {
    dispatch(setOpenModalName(`cardDetailModal${card.id}`));
    dispatch(openModal(`cardDetailModal${card.id}`));
  };

  const handleClickEditCard = () => {
    dispatch(setOpenModalName(`editCard${card.id}`));
    dispatch(openModal(`editCard${card.id}`));
  };
  console.log('console is', card);
  return (
    <>
      <CardContainer onClick={handleClickOpenDetail}>
        {
          </*임시용 꼭 지울것*/ button className='모달수정용임시버튼' onClick={handleClickEditCard}>
            수정
          </button>
        }
        {card.imageUrl !== null && (
          <div className='image-box'>
            <img src={card.imageUrl} alt='card-image' />
          </div>
        )}
        <h2 className='title-box'>{card.title}</h2>
        <div className='tag-box'>
          {card.tags.length > 0 &&
            card.tags.map((tag, index) => (
              <TagComponent
                key={card.tags.indexOf(tag)}
                name={tag}
                backgroundColor={makeRandomBackgroundColor(index)}
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
      </CardContainer>
      {openModalName === `cardDetailModal${card.id}` ? <CardDetail idGroup={idGroup} cardId={card.id} /> : null}
      {openSecondModalName === `deleteCardAlert${card.id}` ? (
        <DeleteAlert handleSubmitDelete={handleDeleteCard} />
      ) : null}
      {openModalName === `editCard${card.id}` ? <EditCard card={card} /> : null}
    </>
  );
};

export default Card;
