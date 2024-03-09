export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const PASSWORD_REGEX = /^.{8,}$/;
export const NICKNAME_REGEX = /^.{1,10}$/;

export const emailPattern = {
  value: new RegExp(EMAIL_REGEX),
  message: '이메일 형식으로 작성해주세요.',
} as const;

export const passwordPattern = {
  value: new RegExp(PASSWORD_REGEX),
  message: '비밀번호는 8자 이상 입력해 주세요.',
} as const;

export const nicknamePattern = {
  value: new RegExp(NICKNAME_REGEX),
  message: '열 자 이하로 작성해주세요.',
} as const;
