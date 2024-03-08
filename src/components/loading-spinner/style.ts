import styled from 'styled-components';

const StLoadingSpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 60%;
  }
`;

export default StLoadingSpinnerContainer;
