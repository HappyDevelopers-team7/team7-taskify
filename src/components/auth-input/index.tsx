import { authInputProps } from './authInputType';
import { useState } from 'react';
import { StAuthInputContainer, StAuthLabel } from './style';
import { StErrorMessage } from '@/styles/input/style';

/**
 * 로그인/회원가입에 사용되는 input
 * @param {string} id - input id (필수)
 * @param {string} type - input type
 * @param {string} name - input name
 * @param {string} placeholder - placeholder
 * @param {boolean} password - 비밀번호 input이라면 true
 * @param {ValidateRules | AsyncValidateRules} rules - 각종 필요한 룰을 지정해줌
 * @param {UseFormRegister<FieldValues>} register - input name과 rules가 들어가는 곳
 * @param {FieldErrors<FieldValues>} errors - error 표시
 */
const AuthInput = ({
  id,
  type,
  name,
  label,
  register,
  errors,
  rules,
  password = false,
  placeholder = '내용을 입력하세요',
}: authInputProps) => {
  const errorMessages = errors && errors[name] ? errors[name]?.message : null;
  /**
   * '!!'로 인해 강제로 boolean 값을 반환한다.
   */
  const isError = !!(errors && errorMessages);

  const [isEyeOff, setIsEyeOff] = useState(true);
  const handleClickEyeToggle = () => {
    setIsEyeOff((currentBoolean) => !currentBoolean);
  };

  return (
    <>
      {label ? <StAuthLabel>{label}</StAuthLabel> : null}

      <StAuthInputContainer className={isError ? 'red' : ''}>
        {password ? (
          <>
            <input
              id={id}
              type={isEyeOff ? type : 'text'}
              placeholder={placeholder}
              {...(register && register(name, rules))}
            />
            <button type='button' onClick={handleClickEyeToggle}>
              {isEyeOff ? (
                <img src='assets/image/icons/eyeOffIcon.svg' alt='비밀번호 보려면 클릭' />
              ) : (
                <img src='assets/image/icons/eyeOnIcon.svg' alt='비밀번호 숨기려면 클릭' />
              )}
            </button>
          </>
        ) : (
          <input id={id} type={type} placeholder={placeholder} {...(register && register(name, rules))} />
        )}
      </StAuthInputContainer>
      {isError && typeof errorMessages === 'string' ? (
        <StErrorMessage aria-live='assertive'>{errorMessages}</StErrorMessage>
      ) : null}
    </>
  );
};

export default AuthInput;
