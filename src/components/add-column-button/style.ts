import styled from 'styled-components';

const Button = styled.button`
  width: 354px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray_d9};
  background: ${({ theme }) => theme.color.white};
  outline: none;

  font-size: 1.8rem;
  font-weight: 700;

  user-select: none;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export default Button;
