import styled from 'styled-components';

export const StColumnContainer = styled.div`
  width: 354px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray_fa};
  border-right: 1px solid ${({ theme }) => theme.color.gray_ee};
  flex-shrink: 0;
  user-select: none;

  .column-head {
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 20px 24px;

    .column-color {
      width: 8px;
      height: 8px;
      background-color: ${({ theme }) => theme.color.violet};
      border-radius: 50%;
      margin-right: 8px;
    }

    h2 {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      margin-right: 12px;
    }

    .inner-cards {
      width: auto;
      height: 20px;
      padding: 3px 6px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.color.gray_ee};

      font-size: 12px;
      font-style: normal;
      font-weight: 500;
    }

    img {
      position: absolute;
      right: 20px;
      cursor: pointer;
    }
  }

  .column-body {
    padding: 0px 20px 16px;
    transition: height 0.5s ease-in-out;

    .add-card {
      width: 100%;
      height: 100%;
      padding: 9px 0px 9px;
      display: flex;
      justify-content: center;

      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.gray_d9};
      border-radius: 6px;
    }
  }

  .column-foot {
    padding: 0px 20px 16px;

    button {
      width: 314px;
      padding: 15px 0px 15px 16px;
      margin-bottom: 32px;

      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.color.gray_d9};
      background: ${({ theme }) => theme.color.white};

      font-size: 1.6rem;
    }
  }

  h3 {
    font-size: 3rem;
  }

  @media (max-width: 1199px) {
    width: 100%;
    height: auto;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray_ee};

    .column-foot {
      button {
        width: 100%;
        padding: 15px 0px 15px 16px;
        margin-bottom: 32px;

        border-radius: 6px;
        border: 1px solid ${({ theme }) => theme.color.gray_d9};
        background: ${({ theme }) => theme.color.white};

        font-size: 1.6rem;
      }
    }
  }
`;
