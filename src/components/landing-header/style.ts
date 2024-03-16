import styled from 'styled-components';

export const StHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    margin-top: 100px;
  }

  h1 {
    color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7.6rem;
    font-weight: 700;
    line-height: 100px;
    letter-spacing: -2px;
    margin: 50px auto;

    @media (min-width: 375px) and (max-width: 767px) {
      text-align: center;
      font-size: 4rem;
      flex-direction: column;
      margin: 25px 5px;
      line-height: normal;
    }

    span {
      color: ${({ theme }) => theme.color.violet};
      text-align: center;
      font-family: Montserrat;
      font-size: 9rem;
      font-weight: 700;
      letter-spacing: -1px;
      margin-left: 28px;
      padding-bottom: 8px;

      @media (min-width: 375px) and (max-width: 767px) {
        text-align: center;
        font-size: 4rem;
        margin: 0;
      }
    }
  }

  h3 {
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1px;

    @media (min-width: 375px) and (max-width: 767px) {
      text-align: center;
      font-size: 1.2rem;
    }
  }

  button {
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: normal;
    display: flex;
    width: 280px;
    padding: 15px 0px 14px 0px;
    margin: 65px 180px auto;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: ${({ theme }) => theme.color.violet};
  }
`;
