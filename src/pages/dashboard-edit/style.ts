import styled from 'styled-components';

const StEditContainer = styled.div`
  height: 100%;
  overflow: auto;
  background: ${({ theme }) => theme.color.gray_fa};
  color: ${({ theme }) => theme.color.black_33};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  padding-left: 20px;
  padding-bottom: 120px;
`;

export default StEditContainer;
