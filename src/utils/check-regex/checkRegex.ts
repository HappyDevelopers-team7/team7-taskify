import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/regex';

export const emailPattern = {
  value: new RegExp(EMAIL_REGEX),
  message: '올바른 이메일 주소가 아닙니다.',
};

export const passwordPattern = {
  value: new RegExp(PASSWORD_REGEX),
  message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
};
