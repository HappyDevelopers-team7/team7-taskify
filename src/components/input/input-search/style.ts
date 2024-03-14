import { input, inputContainer } from '@/styles/input/style';
import styled from 'styled-components';

const StInputSearchContainer = styled.div`
  ${inputContainer}
  padding: 10px 16px;
  margin-bottom: 24px;

  input {
    ${input}
  }
`;

export default StInputSearchContainer;
