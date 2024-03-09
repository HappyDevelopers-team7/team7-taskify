/**
 * 로그인/ 회원가입 관련 에러 메시지 상수 모음
 */
export const AUTH_ERROR_MESSAGES = {
  DUPLICATE_EMAIL: '이미 사용중인 이메일입니다.',
  EMAIL_REQUIRED: '이메일을 입력해주세요.',
  NICKNAME_REQUIRED: '닉네임을 입력해주세요.',
  PASSWORD_REQUIRED: '비밀번호를 입력해주세요.',
  CONFIRM_PASSWORD_REQUIRED: '비밀번호와 일치하는 값을 입력해 주세요.',
  EMAIL_CHECK_FAILED: '이메일을 다시 확인해주세요.',
  INVALID_EMAIL: '이메일 형식으로 작성해주세요.',
  INVALID_PASSWORD: '비밀번호는 8자 이상 입력해 주세요.',
  INVALID_NICKNAME: '열 자 이하로 작성해주세요.',
  INVALID_CONFIRM_PASSWORD: '비밀번호가 일치하지 않습니다.',
  USER_NOT_FOUND: '존재하지 않는 유저입니다.',
} as const;
