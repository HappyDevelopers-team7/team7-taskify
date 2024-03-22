import styled from 'styled-components';

const StMemberListDiv = styled.div`
  width: 620px;
  height: 350px;
  flex-shrink: 0;
  padding: 24px 16px 0px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  color: #333236;
  margin-bottom: 12px;

  .memberlist-head {
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 28px;
    .currentpage-alarm {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: Pretendard;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .name {
    color: ${({ theme }) => theme.color.gray_9f};
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 18px 28px 18px 28px;
  }

  .member-list {
    display: block;
    align-items: center;
    justify-content: center;
    gap: 12px;
    li {
      display: flex;
      height: 40px;
      padding: 16px 28px;
      margin: 8px 0px 8px 0px;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    }
    .profile-box {
      gap: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .myinfo-image {
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      border-radius: 100%;
      border: 1px solid ${({ theme }) => theme.color.white};
      /* border-color: ${({ theme }) => theme.color.white}; */
    }
  }
  .myinfo-color {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px; /* 필요에 따라 너비와 높이 조절 */
    height: 38px; /* 필요에 따라 너비와 높이 조절 */
    border-radius: 100%; /* 원으로 만듭니다 */
    border: 1px solid ${({ theme }) => theme.color.white};
    /* border-color: ${({ theme }) => theme.color.white}; */
    flex-shrink: 0;
  }
  li {
    margin: 8px 0px 8px 0px;
  }

  .myinfo-initial {
    color: ${({ theme }) => theme.color.white};
    padding-top: 3px; //가운데 정렬을 해서 배경가운데에 있는데 폰트때문인지 조금위쪽으로 뜬느낌이라서 패딩을 줌
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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

  .delete-button {
    display: flex;
    width: 84px;
    height: 32px;
    padding: 7px 29px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.color.gray_d9};
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.violet};
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .gray-line {
    width: 90%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.gray_d9};
    margin: 0 auto;
  }
`;

export default StMemberListDiv;
