import styled from 'styled-components';

const StEditContainer = styled.div`
  height: 100%;
  overflow: auto;
  background: #fafafa;
  color: ${({ theme }) => theme.color.black_33};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 120px;
  gap: 12px;
`;

export default StEditContainer;
