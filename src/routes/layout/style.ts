import styled from 'styled-components';

const StWrapper = styled.div`
  min-height: 100vh;
  padding-top: 70px;

  #container {
    padding-left: 300px;
    width: 100%;
    height: calc(100vh - 70px);
    overflow: hidden;
  }

  @media (max-width: 1199px) {
    #container {
      padding-left: 160px;
    }
  }

  @media (max-width: 767px) {
    #container {
      padding-left: 67px;
    }
  }
`;

export default StWrapper;
