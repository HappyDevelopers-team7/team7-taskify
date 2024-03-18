import { inputContainer } from '@/styles/input/style';
import { styled } from 'styled-components';

export const StMyPageContainer = styled.div`
  background: #fafafa;
  color: var(--black-black_333236, #333236);
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 120px;

  .back-button {
    margin: 20px;
    margin-right: 6px;
    vertical-align: middle;
  }

  h1 {
    font-size: 24px;
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
    color: var(--white-white_FFFFFF, #fff);
    text-align: center;
    font-size: 14px;
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

  .profile-container {
    display: flex;
  }

  .profile-input-container {
    margin-left: 16px;
    padding-top: 16px;
  }

  .profile-small-title {
    margin-bottom: 10px;
    color: var(--black-black_333236, #333236);
    font-size: 18px;
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
`;

export const StPasswordContainer = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
  width: 620px;
  height: auto;
  padding: 30px;
  margin: 20px;
`;

export const StPasswordInputContainer = styled.div`
  ${inputContainer}
  width: 564px;
  height: 48px;
  margin-bottom: 20px;
  margin-top: 10px;
`;
