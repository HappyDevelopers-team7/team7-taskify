import { input, inputContainer } from '@/styles/input/style';
import styled from 'styled-components';

const StInputSearchContainer = styled.div`
  ${inputContainer}
  padding: 10px 16px;
  margin-bottom: 24px;

  input {
    ${input}
  }

  button {
    width: 24px;
    height: 24px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default StInputSearchContainer;
