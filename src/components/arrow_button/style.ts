import styled from 'styled-components';

const StArrowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    border-radius: 4px 0px 0px 4px;
    border: 1px solid ${({ theme }) => theme.color.gray_d9};
    background: ${({ theme }) => theme.color.white};

    .arrow_disabled {
    }
  }
`;
export default StArrowDiv;
