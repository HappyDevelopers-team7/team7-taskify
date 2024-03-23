import styled from 'styled-components';

const StTagComponent = styled.div<{ $backgroundColor: string }>`
  width: auto;
  height: 22px;
  padding: 4px 6px;
  border-radius: 4px;
  background-color: ${(props) => props.$backgroundColor + '30'};
  color: ${(props) => props.$backgroundColor};
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 767px) {
    height: 20px;
  }
`;

export default StTagComponent;
