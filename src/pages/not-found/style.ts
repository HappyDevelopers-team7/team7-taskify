import styled from 'styled-components';

const StNotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 520px;
    width: 100%;
  }

  h1 {
    margin-bottom: 30px;
    width: 243px;
    height: 279px;

    a {
      display: block;
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-area {
    text-align: center;
    margin-bottom: 38px;

    h2 {
      font-size: 2.4rem;
      margin-bottom: 18px;
    }

    p {
      font-size: 1.8rem;
      line-height: 28px;
    }
  }

  .button-area {
    width: 100%;

    a {
      display: block;
      width: 100%;
      padding: 15px 0;
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.violet};
      border-radius: 8px;
      text-align: center;
      font-size: 1.8rem;
    }
  }

  @media ${({ theme }) => theme.deviceSize.tablet} {
    h1 {
      width: 220px;
      height: 220px;
    }
  }

  @media ${({ theme }) => theme.deviceSize.mobile} {
    .text-area {
      text-align: center;
      margin-bottom: 24px;

      h2 {
        font-size: 2rem;
        margin-bottom: 12px;
      }

      p {
        font-size: 1.4rem;
        line-height: 20px;
      }
    }

    .button-area {
      width: 100%;

      a {
        font-size: 1.4rem;
      }
    }
  }
`;

export default StNotFound;
