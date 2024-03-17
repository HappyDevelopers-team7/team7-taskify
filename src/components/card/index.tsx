import { useEffect, useState } from 'react';
import CardContainer from './style';
import TagComponent from '../tag-component';
import randomHexCode from '@/utils/randomHexCode';

interface Props {
  card: {
    assignee: { id: number; nickname: string; profileImageUrl: string };
    columnId: number;
    createdAt: string;
    dashboardId: number;
    description: string;
    dueDate: string | null;
    id: number;
    imageUrl: string | null;
    tags: string[];
    teamId: number;
    title: string;
    updatedAt: string;
  };
}

interface TagColor {
  [key: string]: string;
}

const Card = ({ card }: Props) => {
  const [tagColors, setTagColors] = useState<TagColor>({});

  useEffect(() => {
    const createdTagColors: TagColor = {};
    card.tags.forEach((tag) => {
      createdTagColors[tag] = randomHexCode();
    });
    setTagColors(createdTagColors);
  }, [card.tags]);

  console.log(card);
  return (
    <CardContainer>
      {card.imageUrl !== null && <img src={card.imageUrl} className='image-box' alt='card-image' />}
      <h2 className='title-box'>{card.title}</h2>
      <div className='tag-box'>
        {card.tags.length > 0 &&
          card.tags.map((tag) => (
            <TagComponent
              key={card.tags.indexOf(tag)}
              id={card.tags.indexOf(tag)}
              name={tag}
              backgroundColor={tagColors[tag]}
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
  );
};

export default Card;
