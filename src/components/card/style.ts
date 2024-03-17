import styled from 'styled-components';

const CardContainer = styled.article`
  width: 314px;
  margin-top: 16px;
  padding: 20px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.gray_d9};
  background: ${({ theme }) => theme.color.white};

  .card-image {
    width: 274px;
    height: 160px;
  }
`;

export default CardContainer;
