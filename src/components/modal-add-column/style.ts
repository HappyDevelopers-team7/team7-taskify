import { inputContainer } from '@/styles/input/style';
import styled from 'styled-components';

export const StColumnModal = styled.div`
  /* ${inputContainer} */

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 32px;
  }

  input {
    font-size: 1.6rem;
    font-weight: 400;
    width: 480px;
    height: 48px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.color.gray_d9};
    margin-top: 10px;
    padding: 15px;

    &:focus-within {
      border: 1px solid ${({ theme }) => theme.color.violet};
    }
  }
`;
