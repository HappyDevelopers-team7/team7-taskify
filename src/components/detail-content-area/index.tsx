import StDetailArea from './style';

interface DetailContentAreaProps {
  content: string | undefined | null;
  imageUrl: string | undefined | null;
}

const DetailContentArea = ({ content, imageUrl }: DetailContentAreaProps) => {
  return (
    <StDetailArea>
      <div className='text-box'>{content}</div>
      {imageUrl ? (
        <div className='image-box'>
          <img src={imageUrl} alt='설명 이미지' />
        </div>
      ) : null}
    </StDetailArea>
  );
};

export default DetailContentArea;
