import styled from 'styled-components';

const StCommentWriteBox = styled.div`
  h4 {
    color: ${({ theme }) => theme.color.black_33};
    margin-bottom: 10px;
    font-size: 1.6rem;
    font-weight: 500;
  }

  @media ${({ theme }) => theme.deviceSize.mobile} {
    h4 {
      margin-bottom: 8px;
      font-size: 1.4rem;
    }
  }
`;

export default StCommentWriteBox;
