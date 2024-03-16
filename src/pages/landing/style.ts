import styled from 'styled-components';

const StLandingContainer = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
  align-items: center;
`;

export default StLandingContainer;
