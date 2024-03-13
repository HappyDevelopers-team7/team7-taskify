import styled from 'styled-components';

export const StFooter = styled.div`
  height: 100px;
  margin: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.gray_9f};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 1.2rem;
    flex-direction: column;
    margin-top: 120px;
    gap: 12px;
    height: auto;
  }

  .footer-center {
    display: flex;
    gap: 30px;
  }
`;

export const StSnsIconList = styled.div`
  display: flex;
  margin: 0;
  gap: 14px;

  @media (min-width: 375px) and (max-width: 767px) {
    margin-top: 70px;
    margin-bottom: 90px;
    gap: 20px;
  }
`;
