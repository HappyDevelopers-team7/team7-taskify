import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.color.gray_d9};
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 10;
  flex-shrink: 0;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.gray_d9};
    border-radius: 5px;
  }

  .logo {
    padding: 20px 167px 0px 24px;
  }

  .sidemenu-head {
    padding: 60px 24px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 1.2rem;
      cursor: default;
    }

    .add-button {
      cursor: pointer;
    }
  }

  .sidemenu-body {
    margin-bottom: 86px;
    .dashboard {
      width: 276px;
      height: 45px;
      display: flex;
      align-items: center;
      padding-left: 12px;
      margin: 0px 12px 0px;
      font-size: 1.8rem;
      border-radius: 4px;
      cursor: pointer;

      span {
        margin-right: 6px;
      }

      .dashboard-color {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 16px;
      }
    }

    .dashboard:hover {
      background-color: ${({ theme }) => theme.color.violet_8};
    }

    .dashboard.selected {
      background-color: ${({ theme }) => theme.color.violet_8};
    }
  }

  .sidemenu-foot {
    .page-button {
      width: 40px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.color.gray_d9};
      position: fixed;
      bottom: 15px;
      background-color: ${({ theme }) => theme.color.white};
    }

    .prev-page {
      border-radius: 4px 0px 0px 4px;
      left: 15px;
    }

    .next-page {
      border-radius: 0px 4px 4px 0px;
      left: 55px;
    }

    .temp-button {
      // PR전에 지울것!
      color: wheat;
      width: 50px;
      height: 50px;
      background-color: deeppink;
      border-radius: 50%;
      position: relative;
      left: 150px;
    }
  }
`;

export default Container;
