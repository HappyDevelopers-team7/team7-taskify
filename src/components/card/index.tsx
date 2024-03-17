import CardContainer from './style';

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

const Card = ({ card }: Props) => {
  return (
    <CardContainer>
      {card.imageUrl !== null && <img src={card.imageUrl} className='card-image' alt='card-image' />}
      <h2>{card.title}</h2>
      {}
    </CardContainer>
  );
};

export default Card;
