import styled from 'styled-components';

const StInvitedSection = styled.section`
  background: ${({ theme }) => theme.color.white};
  padding: 32px 0;
  max-width: 1022px;
  width: 100%;
  border-radius: 8px;

  .invite-header {
    margin: 0 0 24px;
    padding: 0 28px;
  }

  h3 {
    color: ${({ theme }) => theme.color.black_33};
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      color: ${({ theme }) => theme.color.gray_9f};
      font-size: 1.6rem;
      font-weight: 400;
      text-align: left;

      &:nth-child(1) {
        padding-left: 28px;
      }

      &:nth-last-child() {
        padding-right: 28px;
      }
    }

    .button-group {
      display: flex;
      align-items: center;
      gap: 10px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 500;
        border-radius: 4px;
        padding: 7px 29px;

        &.button-reject {
          border: 1px solid ${({ theme }) => theme.color.violet};
          color: ${({ theme }) => theme.color.violet};
        }

        &.button-accept {
          background: ${({ theme }) => theme.color.violet};
          color: ${({ theme }) => theme.color.white};
        }
      }
    }

    tr {
      td {
        &:nth-child(1) {
          padding-left: 28px;
        }

        &:nth-last-child() {
          padding-right: 28px;
        }
      }
      & ~ tr {
        border-top: 1px solid #eee;
      }
    }

    td {
      padding: 26px 0;
      color: ${({ theme }) => theme.color.black_33};
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
`;

export default StInvitedSection;
