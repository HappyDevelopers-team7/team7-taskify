import styled from 'styled-components';

interface ProfileImageProps {
  $size?: number;
  $mobileSize?: number;
  // 추가적인 props가 있다면 여기에 추가
}

const StProfileImage = styled.div<ProfileImageProps>`
  border-radius: 50px;
  width: ${(props) => (props.$size ? props.$size : 32)}px;
  height: ${(props) => (props.$size ? props.$size : 32)}px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${({ theme }) => theme.deviceSize.mobile} {
    ${(props) =>
      props.$mobileSize &&
      `
    width: ${props.$mobileSize}px;
    height: ${props.$mobileSize}px;
  `}
  }
`;

export default StProfileImage;
