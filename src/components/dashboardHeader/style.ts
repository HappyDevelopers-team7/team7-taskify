import styled from 'styled-components';

const Container = styled.div`
  padding-left: 300px;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_d9};

  .titlebox {
    .showicon {
      width: 20.103px;
      height: 16px;
      flex-shrink: 0;
    }
    .hiddenicon {
      visibility: hidden;
    }
  }
`;

export default Container;
