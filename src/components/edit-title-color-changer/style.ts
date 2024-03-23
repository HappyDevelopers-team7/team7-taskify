import styled from 'styled-components';

const StEditTitleAndColorContainer = styled.div`
  width: 620px;
  height: 350px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  padding: 32px 16px;
  margin-bottom: 12px;

  .dashboard-title {
    padding: 0px 0px 20px 28px;
    white-space: nowrap;
    color: ${({ theme }) => theme.color.black_33};
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .change-form-div {
    width: 100%;
    /* height: 70%; */
    padding: 0px 28px 0px 28px;
  }

  button {
    padding: 20px 46px;
    width: 110px;
    height: 28px;
    border-radius: 8px;
    color: ${({ theme }) => theme.color.gray_78};
    font-size: 1.6rem;
    font-weight: 500;
  }

  .change-button {
    display: flex;
    justify-content: center;
    float: right;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.violet};
    transition: background-color 0.1s;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 20px;
    &:hover {
      color: ${({ theme }) => theme.color.violet};
      outline: 1px solid ${({ theme }) => theme.color.violet};
      background: ${({ theme }) => theme.color.white};
    }
  }

  .input-colorpicker__group {
    margin-top: 28px;
    position: relative;
  }

  .input-colorpicker {
    position: relative;
  }

  .color-picker-box {
    position: absolute;
    margin-top: 12px;
  }
`;

export default StEditTitleAndColorContainer;
