import styled from 'styled-components';

const StSignInContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 170px 0;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black_33};
    margin-top: 10px;
  }

  .container__box {
    max-width: 520px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    width: 100%;
    margin-top: 38px;

    .form__submit-button {
      margin-top: 20px;
    }

    .form__agreement-checkbox {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 24px;

      input {
        -webkit-appearance: none; /* safari / chrome */
        -moz-appearance: none; /* Mozilla */
        appearance: none;
        width: 20px;
        height: 20px;
        display: block;
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.color.gray_d9};
        cursor: pointer;

        &:checked {
          background: ${({ theme }) => theme.color.violet} url(assets/image/icons/checkWhiteIcon.svg) no-repeat center;
          background-size: 95%;
        }
      }

      label {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.color.black_33};
        cursor: pointer;
      }
    }
  }

  h5 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color.black_33};
    margin-top: 26px;

    a {
      text-decoration: underline;
      color: ${({ theme }) => theme.color.violet};
    }
  }

  @media ${({ theme }) => theme.deviceSize.mobile} {
    padding: 144px 12px;

    h1 {
      img {
        width: 128px;
      }
    }

    h5 {
      margin-top: 24px;
    }
  }
`;

export default StSignInContainer;
