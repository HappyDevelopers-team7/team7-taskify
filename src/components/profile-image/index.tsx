import getDefaultImageUrlIfNull from '@/utils/getDefaultImageIfNull';
import StProfileImage from './style';

export interface ProfileImageProps {
  imageUrl: string | null;
  alt?: string;
}

const ProfileImage = ({ imageUrl, alt }: ProfileImageProps) => {
  return (
    <StProfileImage>
      <img src={getDefaultImageUrlIfNull(imageUrl)} alt={alt ? alt : '프로필 이미지'} />
    </StProfileImage>
  );
};

export default ProfileImage;
