import styled from 'styled-components';

export const StFooter = styled.div`
  height: 100px;
  margin: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.gray_9f};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  .footer-center {
    display: flex;
    gap: 30px;
  }
`;

export const StSnsIconList = styled.div`
  display: flex;
  margin: 0;
  gap: 14px;
`;
