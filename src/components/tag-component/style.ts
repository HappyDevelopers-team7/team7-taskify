import styled from 'styled-components';

const StTagComponent = styled.div<{ $backgroundColor: string }>`
  min-width: 54px;
  height: 22px;
  padding: 4px 6px;
  border-radius: 4px;
  background-color: ${(props) => props.$backgroundColor + '30'};
  color: ${(props) => props.$backgroundColor};
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
`;

export default StTagComponent;
