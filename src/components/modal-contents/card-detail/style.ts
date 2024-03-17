import styled from 'styled-components';

const StDetailModalContainer = styled.article`
  display: flex;

  .content-area {
    width: 70%;

    .tag-box {
      display: flex;
      align-items: center;
      gap: 12px;

      .divide-bar {
        width: 1px;
        height: 20px;
        background: ${({ theme }) => theme.color.gray_d9};
      }

      .sub-tag-box {
        display: flex;
        align-items: center;
      }
    }
  }

  .information-area {
    width: 30%;
  }
`;

export default StDetailModalContainer;
