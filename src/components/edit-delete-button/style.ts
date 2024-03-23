import styled from 'styled-components';

const StDeleteButton = styled.button`
  display: flex;
  width: 320px;
  height: 62px;
  padding: 20px 95px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray_d9};
  background: ${({ theme }) => theme.color.gray_fa};
`;

export default StDeleteButton;
