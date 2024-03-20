import { commonHeight } from '@/styles/common-height/style';
import styled from 'styled-components';

const StDashBoardWrap = styled.div`
  ${commonHeight}
  background: ${({ theme }) => theme.color.gray_fa};
  padding: 40px;
`;

export default StDashBoardWrap;
