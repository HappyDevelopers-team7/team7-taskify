import styled from 'styled-components';

const StDashboardIdContainer = styled.div`
  background-color: ${({ theme }) => theme.color.gray_fa};
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;

  .button-box {
    padding: 68px 0px 0px 20px;
    background-color: ${({ theme }) => theme.color.gray_fa};
  }

  @media (max-width: 1199px) {
    flex-direction: column;

    .button-box {
      padding: 20px;
    }
  }
`;

export default StDashboardIdContainer;
