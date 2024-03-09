import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface ValidateFunction {
  (value: unknown): boolean | string;
}

interface AsyncValidateFunction {
  (value: unknown): Promise<boolean | string>;
}

interface ValidateRules {
  required?: boolean | string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: Record<string, ValidateFunction>;
}

interface AsyncValidateRules {
  required?: boolean | string;
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: Record<string, AsyncValidateFunction>;
}

export interface authInputProps {
  id: string;
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  /**
   * 비밀번호 input 이라면 true를 반드시 줘야함
   * 그래야 눈 아이콘이 표시됨
   */
  password?: boolean;
  rules?: ValidateRules | AsyncValidateRules;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
}
