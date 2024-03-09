import styled from 'styled-components';

const StFullButton = styled.button`
  width: 100%;
  padding: 15px 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.gray_9f};

  &.active {
    background-color: ${({ theme }) => theme.color.violet};
  }

  span {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.white};
    line-height: 1;
  }
`;

export default StFullButton;
