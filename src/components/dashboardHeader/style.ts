import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.color.white};
  padding-left: 300px;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_d9};
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;

  .dashboard-right-space {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .titlebox {
    width: 20%;
    height: 30%;
    display: flex;
    color: var(--black-black_333236, #333236);
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 23px 0px 23px 40px;

    .showIcon {
      margin: 4px 0px 4px 8px;
      width: 20.103px;
      height: 16px;
      flex-shrink: 0;
    }
    .hiddenIcon {
      visibility: hidden;
    }
  }
  /* .dashboard-info-members-container-four-members {
    width: 130px;
  } */

  .myinfo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 26px 80px 25px 24px;

    .myinfo-image {
      //임시로해놓음 나중에 잘되는지 체크해야됨.
      display: flex;
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      border-radius: 100%;
    }

    .myinfo-color {
      display: flex;
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      border-radius: 100%;
      align-items: center;
      justify-content: center;

      .myinfo-initial {
        color: var(--white-white_FFFFFF, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }

    .myinfo-name {
      color: #333236;
      font-family: Pretendard;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .myinfo-color-green {
      background-color: #5be352;
    }
    .myinfo-color-purple {
      background-color: #bc57ff;
    }
    .myinfo-color-orange {
      background-color: #ffc85a;
    }
    .myinfo-color-blue {
      background-color: #9dd7ed;
    }
    .myinfo-color-pink {
      background-color: #ff6ee0;
    }
  }
  .dashboard-info-members-container {
    /* height: 42; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 24px;
    border-right: 1px solid ${({ theme }) => theme.color.gray_d9};

    /* .dashboard-info-members-container li {
      position: absolute; /* 각 요소를 absolute로 설정합니다. */
    /* margin-right: -28px; 인덱스에 따라 왼쪽으로 이동하여 겹치도록 설정합니다. */
    /* } */

    /* .dashboard-info-members-container ul {
      position: relative;
    } */

    .myinfo-image {
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      border-radius: 100%;
      border: 1px solid;
      border-color: #ffffff;
    }

    li ~ li {
      margin-left: -8px;
    }

    .only-one {
      width: 40px;
    }
    .two-members {
      width: 70px;
    }
    .three-members {
      width: 100px;
    }
    .four-members {
      width: 130px;
    }
    .five-members {
      width: 160px;
    }
    /* 
    .첫번째 {
      z-index: 1;
      position: absolute;
      right: 356px;
      bottom: 16px;
    }
    .두번째 {
      z-index: 2;
      position: absolute;
      right: 326px;
      bottom: 16px;
    }
    .세번째 {
      z-index: 3;
      position: absolute;
      right: 296px;
      bottom: 16px;
    }
    .네번째 {
      z-index: 4;
      position: absolute;
      right: 266px;
      bottom: 16px;
    } */

    .myinfo-color {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px; /* 필요에 따라 너비와 높이 조절 */
      height: 38px; /* 필요에 따라 너비와 높이 조절 */
      border-radius: 100%; /* 원으로 만듭니다 */
      border: 1px solid;
      border-color: #ffffff;
      flex-shrink: 0;
    }

    .myinfo-initial {
      color: var(--white-white_FFFFFF, #fff);
      text-align: center;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .extracolor {
      color: #d25b68;
      background-color: #f4d7da;
      font-size: 16px;
      font-family: Pretendard;
      text-align: center;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    &.myinfo-color-green {
      background-color: #5be352;
    }
    .myinfo-color-purple {
      background-color: #bc57ff;
    }
    .myinfo-color-orange {
      background-color: #ffc85a;
    }
    .myinfo-color-blue {
      background-color: #9dd7ed;
    }
    .myinfo-color-pink {
      background-color: #ff6ee0;
    }
  }
`;
