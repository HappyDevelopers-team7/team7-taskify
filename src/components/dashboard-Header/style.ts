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
    color: ${({ theme }) => theme.color.black_33};

    font-size: 2rem;

    font-weight: 700;

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
    padding: 26px 80px 25px 24px;
    cursor: pointer;

    .myinfo-mypage-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .myinfo-image {
      display: flex;
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      border-radius: 100%;
      background-size: contain;
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
        color: ${({ theme }) => theme.color.white};
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;

        font-weight: 600;
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
      color: ${({ theme }) => theme.color.black_33};

      font-size: 1.6rem;

      font-weight: 500;
    }

    .myinfo-color-green {
      background-color: ${({ theme }) => theme.color.green_5b};
    }
    .myinfo-color-purple {
      background-color: ${({ theme }) => theme.color.purple_bc};
    }
    .myinfo-color-orange {
      background-color: ${({ theme }) => theme.color.orange_ff};
    }
    .myinfo-color-blue {
      background-color: ${({ theme }) => theme.color.blue_9d};
    }
    .myinfo-color-pink {
      background-color: ${({ theme }) => theme.color.pink_ff};
    }
  }
  .dashboard-info-members-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 24px;
    margin-left: 12px;
    border-right: 1px solid ${({ theme }) => theme.color.gray_d9};

    .myinfo-image {
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      border-radius: 100%;
      border: 1px solid;
      border-color: ${({ theme }) => theme.color.white};
      background-size: contain;
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

    .myinfo-color {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: 100%;
      border: 1px solid;
      border-color: ${({ theme }) => theme.color.white};
      flex-shrink: 0;
    }

    .myinfo-initial {
      color: ${({ theme }) => theme.color.white};
      padding-top: 3px;
      text-align: center;
      font-size: 16px;

      font-weight: 600;
    }

    .extracolor {
      color: ${({ theme }) => theme.color.red_d2};
      background-color: ${({ theme }) => theme.color.red_f4};
      font-size: 16px;
      text-align: center;
      font-weight: 500;
    }

    &.myinfo-color-green {
      background-color: ${({ theme }) => theme.color.green_5b};
    }
    .myinfo-color-purple {
      background-color: ${({ theme }) => theme.color.purple_bc};
    }
    .myinfo-color-orange {
      background-color: ${({ theme }) => theme.color.orange_ff};
    }
    .myinfo-color-blue {
      background-color: ${({ theme }) => theme.color.blue_9d};
    }
    .myinfo-color-pink {
      background-color: ${({ theme }) => theme.color.pink_ff};
    }

    .hover-member-info {
      z-index: 10;
      width: 250px;
      padding: 24px;
      background-color: ${({ theme }) => theme.color.white};
      position: absolute;
      top: 100%;
      left: -50%;
      margin-left: 0;
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.color.gray_d9};

      span {
        font-size: 1.6rem;
      }
    }
  }

  .invite-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 116px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.gray_d9};
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.gray_78};
    font-size: 16px;
    font-weight: 500;
    img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }
  .one-man {
    margin-right: 32px;
  }
  .two-men {
    margin-right: 24px;
  }
  .three-men {
    margin-right: 16px;
  }
  .four-men {
    margin-right: 8px;
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
    border: 1px solid ${({ theme }) => theme.color.gray_d9};
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.gray_78};
    font-size: 16px;
    font-weight: 500;
    img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }
`;
