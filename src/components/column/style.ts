import styled from 'styled-components';

export const ColumnContainer = styled.div`
  width: 354px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray_fa};
  border-right: 1px solid ${({ theme }) => theme.color.gray_ee};
  flex-shrink: 0;

  .column-header {
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
      width: 20px;
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

  h3 {
    font-size: 3rem;
  }
`;

export const ModalContent = styled.div`
  height: 630px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.gray_d9};
    border-radius: 5px;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .asignee {
    color: ${({ theme }) => theme.color.gray_9f};
  }

  span {
    color: ${({ theme }) => theme.color.violet};
  }

  .input-box {
    width: 100%;
    padding: 15px 0px 15px 16px;
    margin-bottom: 32px;

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.color.gray_d9};
    background: ${({ theme }) => theme.color.white};

    font-size: 1.6rem;
  }

  .input-box::placeholder {
    color: ${({ theme }) => theme.color.gray_9f};
  }

  .input-box.asignee-box {
    width: 50%;
  }

  .input-box.date-box {
    padding-left: 40px;
  }

  .input-box.description-box {
    height: 96px;
  }

  .date-box {
    background-image: url('/assets/image/icons/calendarIcon.svg');
    background-repeat: no-repeat;
    background-position: 3%;
    background-size: 22px;
  }

  .calendar {
    width: 22px;
    height: 22px;
    position: absolute;
    bottom: 370px;
    left: 40px;
    cursor: pointer;
  }

  .add-image {
    width: 76px;
    height: 76px;
    border-radius: 6px;
    background-color: #f5f5f5;
  }

  .file-name {
    font-size: 1.4rem;
  }
`;
