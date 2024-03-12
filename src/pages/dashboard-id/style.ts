import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.gray_fa};
  width: 100%;
  height: 100%;

  .button-box {
    padding: 68px 0px 0px 20px;
  }
`;

export default Container;
