import { css } from 'styled-components';

/**
 * - input을 감싸는 div에 import해 넣어서 사용하면 공통 스타일 적용됨
 * - ❗️대신에 padding은 다 다르니까 따로 넣어주어야함.
 * - 예시는 @components/auth-input/style.ts 참고
 */
export const inputContainer = css`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray_d9};
`;

/**
 * - input에 import해서 넣어주고 알맞게 스타일 수정 필요
 */
export const input = css`
  width: 100%;
  font-size: 1.6rem;
  line-height: 1;

  &:placeholder {
    color: ${({ theme }) => theme.color.gray_9f};
  }
`;
