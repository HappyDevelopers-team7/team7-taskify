import styled from 'styled-components';

const CardContainer = styled.article`
  width: 314px;
  margin-top: 16px;
  padding: 20px;
  position: relative;

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
