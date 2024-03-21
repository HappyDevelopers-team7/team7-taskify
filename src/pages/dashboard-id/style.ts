import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.gray_fa};
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;

  .button-box {
    padding: 68px 0px 0px 20px;
    background-color: ${({ theme }) => theme.color.gray_fa};
  }
`;

export default Container;
