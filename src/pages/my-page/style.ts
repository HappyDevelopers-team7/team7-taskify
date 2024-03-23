import { commonHeight } from '@/styles/common-height/style';
import { inputContainer } from '@/styles/input/style';
import { styled } from 'styled-components';

export const StMyPageContainer = styled.div`
  ${commonHeight}
  background: ${({ theme }) => theme.color.gray_fa};
  color: ${({ theme }) => theme.color.black_33};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 120px;

  .back-button {
    margin: 20px;
    margin-right: 6px;
    vertical-align: middle;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 30px auto;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }

  button {
    width: 84px;
    height: 32px;
    border-radius: 4px;
    background: var(--violet-violet_5534DA, #5534da);
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: normal;
  }
`;

export const StProfileContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 620px;
  height: auto;
  border-radius: 8px;
  padding: 32px 28px;
  margin: 0 20px 20px;

  img {
    cursor: pointer;
  }

  .profile-container {
    display: flex;

    img {
      max-width: 182px;
      max-height: 182px;
      width: auto;
      height: auto;
    }
  }

  .profile-input-container {
    margin-left: 16px;
    padding-top: 16px;
  }

  .profile-small-title {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.black_33};
    font-size: 1.8rem;
    font-weight: 500;
    line-height: normal;
  }
`;

export const StProfileInput = styled.div`
  ${inputContainer}
  width: 366px;
  height: 48px;
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 15px;
  color: ${({ theme }) => theme.color.gray_9f};
  font-weight: 400;
`;

export const StProfileInputReadOnly = styled.div`
  ${inputContainer}
  width: 366px;
  height: 48px;
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 15px;
  color: ${({ theme }) => theme.color.gray_9f};
  font-weight: 400;
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.color.gray_d9};
  }

  input {
    cursor: default;
  }
`;
