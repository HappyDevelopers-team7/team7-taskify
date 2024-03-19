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

  .invite-button {
  }

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
    cursor: pointer;

    .myinfo-mypage-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

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
    .drop-down-menu {
      position: absolute;
      align-items: center;
      justify-content: center;
      width: 130px;
      top: 100%;
      background: ${({ theme }) => theme.color.white};
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.color.gray_d9};
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
      padding: 6px;
      z-index: 10;

      li {
        button {
          width: 100%;
          color: ${({ theme }) => theme.color.black_33};
          text-align: center;
          padding: 8px 16px;
          font-size: 1.4rem;
          font-weight: 400;
          border-radius: 4px;

          &:hover {
            background: ${({ theme }) => theme.color.violet_8};
            color: ${({ theme }) => theme.color.violet};
          }
        }
      }
    }

    @media ${({ theme }) => theme.deviceSize.mobile} {
      .more-button {
        width: 20px;
        height: 20px;
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
      padding-top: 3px; //가운데 정렬을 해서 배경가운데에 있는데 폰트때문인지 조금위쪽으로 뜬느낌이라서 패딩을 줌
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
  .invite-button {
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 116px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    background: var(--white-white_FFFFFF, #fff);
    color: var(--gray-gray_787486, #787486);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }

  .edit-button {
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 116px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    background: var(--white-white_FFFFFF, #fff);
    color: var(--gray-gray_787486, #787486);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }
`;
