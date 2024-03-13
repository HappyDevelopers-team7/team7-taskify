import styled from 'styled-components';

const StFullButton = styled.button.attrs({ type: 'submit' })`
  width: 100%;
  padding: 15px 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.violet};

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray_9f};
    cursor: not-allowed;
  }

  span {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.white};
    line-height: 1;
  }
`;

export default StFullButton;
