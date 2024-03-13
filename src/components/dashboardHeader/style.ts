import styled from 'styled-components';

const Container = styled.div`
  padding-left: 300px;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_d9};
  flex-shrink: 0;
  display: flex;

  .titlebox {
    width: 70px;
    height: 24px;
    display: flex;
    color: var(--black-black_333236, #333236);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 23px 1488px 23px 40px;

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

    .myinfo-color {
      width: 38px;
      height: 38px;
      flex-shrink: 0;
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

export default Container;
