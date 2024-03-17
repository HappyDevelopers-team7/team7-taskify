import styled from 'styled-components';

interface StModalContainer {
  $modalWidth?: number;
  $type?: string;
}

const StModalContainer = styled.div<StModalContainer>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20; // 사이드바가 10이라서 그것보다 높혀주기 위함

  .modal-dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
  }

  .detail-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;

    .detail-button-group {
      display: flex;
      align-items: center;
      gap: 24px;

      .detail-close-button {
        width: 32px;
        height: 32px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  .modal-content {
    position: relative;
    max-height: 90vh;
    max-width: ${(props) => (props.$modalWidth ? props.$modalWidth : 'auto')}px;
    width: 100%;
    background: #fff;
    border-radius: 15px;
    border: 1px solid #ccd5e3;
    padding: 28px;

    h2 {
      color: ${({ theme }) => theme.color.black_33};
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: ${(props) => (props.$type === 'detail' ? '0' : '32')}px;
    }

    .modal-content__box {
      max-height: 50vw;
      overflow: auto;
    }
  }

  .modal-button-group {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 28px;

    .delete-button-box {
      button {
        color: ${({ theme }) => theme.color.gray_9f};
        font-size: 1.4rem;
        font-weight: 400;
        text-decoration: underline;
        transition: 0.15s;

        &:hover {
          color: ${({ theme }) => theme.color.red};
        }
      }
    }

    .submit-button-box {
      display: flex;
      align-items: center;
      gap: 12px;

      button {
        padding: 14px 46px;
        border-radius: 8px;
        color: ${({ theme }) => theme.color.gray_78};
        font-size: 1.6rem;
        font-weight: 500;
      }

      .modal-button__close {
        color: ${({ theme }) => theme.color.gray_78};
        outline: 1px solid ${({ theme }) => theme.color.gray_d9};
        background: ${({ theme }) => theme.color.white};
        transition: all 0.2s;

        &:hover {
          color: ${({ theme }) => theme.color.violet};
          outline: 1px solid ${({ theme }) => theme.color.violet};
        }
      }

      .modal-button__submit {
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.violet};
        transition: background-color 0.1s;

        &:hover {
          color: ${({ theme }) => theme.color.violet};
          outline: 1px solid ${({ theme }) => theme.color.violet};
          background: ${({ theme }) => theme.color.white};
        }
      }
    }
  }

  @media ${({ theme }) => theme.deviceSize.mobile} {
    .detail-header {
      margin-bottom: 24px;

      .detail-button-group {
        gap: 16px;

        .detail-close-button {
          width: 24px;
          height: 24px;
        }
      }
    }

    .modal-content {
      width: 96%;
      max-height: 95vh;
      padding: 28px 20px;
      h2 {
        font-size: 2rem;
        margin-bottom: ${(props) => (props.$type === 'detail' ? '0' : '24')}px;
      }

      .modal-content__box {
        max-height: 80vh;
        overflow: auto;
      }
    }

    .modal-button-group {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 24px;

      .delete-button-box {
        margin-bottom: 16px;
      }

      .submit-button-box {
        width: 100%;
        gap: 10px;

        button {
          width: calc(100% / 2);
          padding: 12px 46px;
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export default StModalContainer;
