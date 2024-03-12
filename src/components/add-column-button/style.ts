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

  font-size: 1.8rem;
  font-weight: 700;
`;

export default Button;
