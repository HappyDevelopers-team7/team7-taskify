import { AUTH_ERROR_MESSAGES } from '../message';

export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const PASSWORD_REGEX = /^.{8,}$/;
export const NICKNAME_REGEX = /^.{1,10}$/;

export const emailPattern = {
  value: new RegExp(EMAIL_REGEX),
  message: AUTH_ERROR_MESSAGES.INVALID_EMAIL,
} as const;

export const passwordPattern = {
  value: new RegExp(PASSWORD_REGEX),
  message: AUTH_ERROR_MESSAGES.INVALID_PASSWORD,
} as const;

export const nicknamePattern = {
  value: new RegExp(NICKNAME_REGEX),
  message: AUTH_ERROR_MESSAGES.INVALID_NICKNAME,
} as const;
