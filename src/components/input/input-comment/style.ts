import { textAreaContainer, textarea } from '@/styles/input/style';
import styled from 'styled-components';

const StInputComment = styled.div`
  ${textAreaContainer}
  padding: 16px;

  textarea {
    ${textarea}
  }

  .submit-button-box {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    button {
      font-size: 1.2rem;
      padding: 9px 30px;
      border-radius: 4px;
      outline: 1px solid ${({ theme }) => theme.color.gray_d9};
      color: ${({ theme }) => theme.color.violet};
      background: ${({ theme }) => theme.color.white};
      transition: 0.2s;

      &:disabled {
        cursor: not-allowed;
      }
    }
  }

  @media ${({ theme }) => theme.deviceSize.mobile} {
    .submit-button-box {
      button {
        padding: 6px 30px;
      }
    }
  }
`;

export default StInputComment;
