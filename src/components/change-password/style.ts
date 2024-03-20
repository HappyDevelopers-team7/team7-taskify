import { inputContainer } from '@/styles/input/style';
import { styled } from 'styled-components';

interface StPasswordInputContainerProps {
  error?: boolean;
  inlineStyle?: React.CSSProperties;
}

export const StPasswordContainer = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
  width: 620px;
  height: auto;
  padding: 30px;
  margin: 20px;
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
