import styled from 'styled-components';

export const Container = styled.header`
  padding-left: 300px;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_d9};
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;

  .dashboard-right-space {
    display: flex;
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

  .myinfo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 26px 80px 25px 0px;

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
    .extracolor {
      color: #d25b68;
      background-color: #f4d7da;
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
`;
export const MyInfoColor = styled.div`
  .dashboard-info-members-container-four-members {
    width: 130 px;
    display: flex;

    /* width: 38px;
    height: 38px; */
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
