import styled from 'styled-components';

const StInviteList = styled.div`
  width: 620px;
  flex-shrink: 0;
  padding: 24px 16px 0px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  color: #333236;
  margin-bottom: 12px;

  .size-1 {
    height: 200px;
  }
  .size-2 {
    height: 250px;
  }
  .size-3 {
    height: 300px;
  }
  .size-4 {
    height: 350px;
  }

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
      gap: 16px;
      font-family: Pretendard;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .invite-button {
      gap: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 105px;
      height: 32px;
      flex-shrink: 0;
      border-radius: 4px;
      background: ${({ theme }) => theme.color.violet};
      color: ${({ theme }) => theme.color.white};
      font-family: Pretendard;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  .email {
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
    &.size-1 {
      height: 75px;
    }
    &.size-2 {
      height: 125px;
    }
    &.size-3 {
      height: 175px;
    }
    &.size-4 {
      height: 225px;
    }
    &.size-5 {
      height: 280px;
    }
    li {
      display: flex;
      height: 40px;
      padding: 16px 28px;
      margin: 8px 0px 8px 0px;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    }
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
export default StInviteList;
