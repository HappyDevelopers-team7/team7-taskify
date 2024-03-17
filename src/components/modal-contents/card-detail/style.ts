import styled from 'styled-components';

const StDetailModalContainer = styled.article`
  display: flex;
  gap: 24px;

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
    flex: 1;

    .information-box {
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 16px;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.color.gray_d9};
      background: ${({ theme }) => theme.color.white};

      li {
        p {
          color: #000;
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 20px;
          margin-bottom: 6px;
        }

        .desc {
          display: flex;
          align-items: center;
          gap: 8px;
          color: ${({ theme }) => theme.color.black_33};
          font-size: 1.4rem;
          font-weight: 400;
        }
      }
    }
  }
`;

export default StDetailModalContainer;
