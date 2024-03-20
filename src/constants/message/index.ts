export const SIMPLE_MESSAGES = {
  CANCELED: '취소 되었습니다.',
  ACCEPTED: '수락 되었습니다.',
  DELETED: '삭제 되었습니다.',
  TRY_AGAIN: '다시 시도해주세요.',
} as const;

export const AUTH_MESSAGES = {
  LOGIN_SUCCESS: '로그인 성공!',
  JOIN_SUCCESS: '가입이 완료되었습니다!',
} as const;

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

export const INPUT_ERROR_MESSAGES = {
  PLEASE_ENTER_VALUE: '값을 입력해주세요.',
} as const;

export const DASHBOARD_MESSAGES = {
  CREATE_DASHBOARD: '대시보드가 생성되었습니다.',
} as const;

export const DASHBOARD_ERROR_MESSAGES = {
  NOT_A_MEMBER: '대시보드의 멤버가 아닙니다.',
  NO_VALUE: '내용을 입력해주세요.',
} as const;

export const COMMENT_MESSAGES = {
  EDIT_COMMENT: '댓글이 수정되었습니다.',
  DELETE_COMMENT: '댓글이 삭제되었습니다.',
};

export const COMMENT_ERROR_MESSAGES = {
  EDIT_PERMISSION_DENIED: '댓글 수정 권한이 없습니다.',
  DELETE_PERMISSION_DENIED: '댓글 삭제 권한이 없습니다.',
} as const;

export const INVITATION_MESSAGES = {
  DO_INVITATION: '대시보드에 초대하였습니다.',
  ALREADY_INVITE: '이미 대시보드에 초대된 멤버입니다.',
  REJECT_INVITATION: '거절되었습니다.',
  ACCEPT_INVITATION: '수락되었습니다.',
  REJECT_CANCELED: '초대 거절이 취소되었습니다.',
  ACCEPT_CANCELED: '초대 수락이 취소되었습니다.',
} as const;

export const INVITATION_ERROR_MESSAGES = {
  NOT_FOUND: '존재하지 않는 초대입니다.',
  FAILED_TO_REJECT: '초대 거절에 실패하였습니다. 다시 시도해주세요.',
};
