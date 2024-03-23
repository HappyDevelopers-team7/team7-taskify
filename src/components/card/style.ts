import styled from 'styled-components';

const CardContainer = styled.article`
  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  width: 314px;
  margin-top: 16px;
  padding: 20px;
  position: relative;
  animation: slideIn 0.5s ease-in-out;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.gray_d9};
  background: ${({ theme }) => theme.color.white};

  cursor: pointer;
  user-select: none;

  .image-box {
    width: 274px;
    height: 160px;
    margin-bottom: 12px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title-box {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  .tag-box {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }

  .date-box {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1.2rem;
  }

  .asignee-box {
    width: 24px;
    height: 24px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
  }

  @media (max-width: 1199px) {
    width: 100%;
    height: auto;

    .image-box {
      width: 90px;
      height: 53px;
      float: left;
      margin-right: 20px;
      img {
        border-radius: 4px;
      }
    }

    .tag-date-box {
      display: flex;

      .date-box {
        flex-shrink: 0;
        position: relative;
        bottom: 8px;
        margin-left: 16px;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 12px;

    .image-box {
      width: 100%;
      height: 152px;
      float: none;
    }

    .tag-date-box {
      flex-direction: column;
      gap: 11px;

      .date-box {
        flex-shrink: 0;
        position: relative;
        bottom: 8px;
        margin: 0;
      }
    }
  }
`;

export default CardContainer;
