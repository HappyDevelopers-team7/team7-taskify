import { Link, useNavigate } from 'react-router-dom';
import AuthInput from '@/components/auth-input';
import FullButton from '@/components/full-button';
import StSignInContainer from '../sign-in/style';
import { useEffect, useState } from 'react';
import { postSignUp } from '@/api/postSignUp';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { emailPattern, nicknamePattern, passwordPattern } from '@/constants/regex';
import { AUTH_ERROR_MESSAGES, AUTH_MESSAGES } from '@/constants/message';
import { toast } from 'react-toastify';
import { useAsync } from '@/hooks/useAsync';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
    setError,
  } = useForm({ mode: 'onBlur', shouldFocusError: true });

  const [agreeChecked, setAgreeChecked] = useState(false);

  const { loading, result, setAsyncFunction } = useAsync(postSignUp);

  const handleChangeActivateRegistration = () => {
    setAgreeChecked((prevState) => !prevState);
  };

  const handleSubmitRegister: SubmitHandler<FieldValues> = async (data) => {
    await setAsyncFunction(data.email, data.nickname, data.password);
  };

  useEffect(() => {
    if (result?.status === 409) {
      setError('email', {
        type: 'serverError',
        message: AUTH_ERROR_MESSAGES.DUPLICATE_EMAIL,
      });
      return;
    }

    if (result?.status === 201) {
      toast.success(AUTH_MESSAGES.JOIN_SUCCESS);
      return navigate('/sign-in');
    }
  }, [result, navigate, setError]);

  return (
    <StSignInContainer>
      <div className='container__box'>
        <h1>
          <Link to='/'>
            <img src='assets/image/logos/largeLogo.svg' alt='랜딩 페이지로 이동하려면 클릭' />
          </Link>
        </h1>
        <h3>첫 방문을 환영합니다!</h3>
        <form onSubmit={handleSubmit(handleSubmitRegister)}>
          <AuthInput
            id='email'
            name='email'
            type='email'
            register={register}
            errors={errors}
            rules={{
              required: AUTH_ERROR_MESSAGES.EMAIL_REQUIRED,
              pattern: emailPattern,
            }}
            placeholder='이메일을 입력해 주세요.'
            label='이메일'
          />
          <AuthInput
            id='nickname'
            name='nickname'
            type='text'
            register={register}
            errors={errors}
            rules={{
              required: AUTH_ERROR_MESSAGES.NICKNAME_REQUIRED,
              pattern: nicknamePattern,
            }}
            placeholder='닉네임을 입력해 주세요.'
            label='닉네임'
          />
          <AuthInput
            id='password'
            name='password'
            type='password'
            password
            register={register}
            errors={errors}
            rules={{
              required: AUTH_ERROR_MESSAGES.PASSWORD_REQUIRED,
              pattern: passwordPattern,
            }}
            placeholder='8자 이상 입력해 주세요'
            label='비밀번호'
          />
          <AuthInput
            id='passwordConfirm'
            name='passwordConfirm'
            type='password'
            password
            register={register}
            errors={errors}
            rules={{
              required: AUTH_ERROR_MESSAGES.CONFIRM_PASSWORD_REQUIRED,
              validate: {
                matchPassword: (value) => {
                  const { password } = getValues();
                  return password === value || AUTH_ERROR_MESSAGES.INVALID_CONFIRM_PASSWORD;
                },
              },
            }}
            placeholder='비밀번호를 한번 더 입력해 주세요'
            label='비밀번호 확인'
          />
          <div className='form__agreement-checkbox'>
            <input
              type='checkbox'
              name='agree'
              id='agree'
              checked={agreeChecked}
              onChange={handleChangeActivateRegistration}
            />
            <label htmlFor='agree'>이용약관에 동의합니다.</label>
          </div>
          <div className='form__submit-button'>
            {loading ? (
              <FullButton disabled={true}>잠시만 기다려주세요...</FullButton>
            ) : (
              <FullButton disabled={agreeChecked && isValid ? false : true}>가입하기</FullButton>
            )}
          </div>
        </form>
        <h5>
          이미 가입하셨나요? <Link to='/sign-in'>로그인하기</Link>
        </h5>
      </div>
    </StSignInContainer>
  );
};

export default SignUp;
