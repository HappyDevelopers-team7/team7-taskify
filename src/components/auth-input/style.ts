import { input, inputContainer } from '@/styles/input/style';
import styled from 'styled-components';

export const StAuthLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.black_33};
  margin-bottom: 8px;

  & ~ label {
    margin-top: 16px;
  }
`;

export const StAuthInputContainer = styled.div`
  ${inputContainer}

  padding: 12px 16px;

  button {
    width: 24px;
    height: 24px;
  }

  input {
    ${input}
    height: 24px;
  }
`;
