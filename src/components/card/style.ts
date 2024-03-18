import styled from 'styled-components';

const CardContainer = styled.article`
  .모달수정용임시버튼 {
    /*기능 연결한 후 꼭 지울것!*/
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: red;
    border-radius: 50%;
  }

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

  .image-box {
    width: 274px;
    height: 160px;
    margin-bottom: 12px;
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
`;

export default CardContainer;
