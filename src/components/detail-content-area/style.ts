import styled from 'styled-components';

const StDetailArea = styled.div`
  margin-bottom: 24px;

  .text-box {
    color: #000;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 24px;
    margin: 16px 0;
  }

  .image-box {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media ${({ theme }) => theme.deviceSize.mobile} {
    margin-bottom: 19px;
  }
`;

export default StDetailArea;
