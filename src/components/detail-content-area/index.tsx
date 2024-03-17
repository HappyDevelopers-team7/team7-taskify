import StDetailArea from './style';

interface DetailContentAreaProps {
  content: string;
  imageUrl?: string;
}

const DetailContentArea = ({ content, imageUrl }: DetailContentAreaProps) => {
  return (
    <StDetailArea>
      <div className='text-box'>{content}</div>
      <div className='image-box'>
        <img src={imageUrl} alt='설명 이미지' />
      </div>
    </StDetailArea>
  );
};

export default DetailContentArea;
