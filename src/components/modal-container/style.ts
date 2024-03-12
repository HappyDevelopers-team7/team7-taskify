import styled from 'styled-components';

interface StModalContainer {
  $modalWidth: number;
}

const StModalContainer = styled.div<StModalContainer>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20; // 사이드바가 10이라서 그것보다 높혀주기 위함

  .modal-dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    position: relative;
    max-width: 730px;
    width: ${(props) => props.$modalWidth}px;
    background: #fff;
    border-radius: 15px;
    border: 1px solid #ccd5e3;
    padding: 32px 40px;
  }

  .modal-button-group {
  }
`;

export default StModalContainer;
