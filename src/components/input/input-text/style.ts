import { input, inputContainer } from '@/styles/input/style';
import styled from 'styled-components';

const StInputContainer = styled.div`
  .label-box {
    display: flex;
    align-items: center;

    label {
      color: ${({ theme }) => theme.color.black_33};
      font-size: 1.8rem;
      font-weight: 500;
    }

    span {
      color: ${({ theme }) => theme.color.violet};
      font-size: 1.8rem;
      font-weight: 500;
      margin-left: 4px;
    }
  }

  .input-box {
    ${inputContainer}

    padding: 15px 16px;
    margin-top: 10px;

    input {
      ${input}
    }
  }

  @media ${({ theme }) => theme.deviceSize.mobile} {
    .label-box {
      label {
        font-size: 1.6rem;
      }
    }
  }
`;

export default StInputContainer;
