import { inputContainer } from '@/styles/input/style';
import { styled } from 'styled-components';

interface StPasswordContainerProps {
  disabled?: boolean;
}

interface StPasswordInputContainerProps {
  error?: boolean;
  inlineStyle?: React.CSSProperties;
}

export const StPasswordContainer = styled.div<StPasswordContainerProps>`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
  width: 620px;
  height: auto;
  padding: 30px;
  margin: 20px;

  button {
    background-color: ${({ theme, disabled }) => (disabled ? theme.color.gray_9f : theme.color.violet)};
  }
`;

export const StPasswordInputContainer = styled.div<StPasswordInputContainerProps>`
  ${inputContainer}
  width: 564px;
  height: 48px;
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 15px;
  color: var(--gray-gray_9FA6B2, #9fa6b2);
  font-weight: 400;
`;
