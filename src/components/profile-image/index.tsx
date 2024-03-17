import getDefaultImageUrlIfNull from '@/utils/getDefaultImageIfNull';
import StProfileImage from './style';

export interface ProfileImageProps {
  imageUrl: string | null;
  size?: number;
  mobileSize?: number;
  alt?: string;
}

const ProfileImage = ({ imageUrl, alt, size, mobileSize }: ProfileImageProps) => {
  return (
    <StProfileImage $size={size} $mobileSize={mobileSize}>
      <img src={getDefaultImageUrlIfNull(imageUrl)} alt={alt ? alt : '프로필 이미지'} />
    </StProfileImage>
  );
};

export default ProfileImage;
