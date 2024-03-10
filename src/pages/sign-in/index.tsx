import { Link, useNavigate } from 'react-router-dom';
import StSignInContainer from './style';
import AuthInput from '@/components/auth-input';
import FullButton from '@/components/full-button';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { postSignIn } from '@/api/postSignIn';
import { emailPattern, passwordPattern } from '@/constants/regex';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { AUTH_ERROR_MESSAGES, AUTH_MESSAGES } from '@/constants/message';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/userSlice';
import { toast } from 'react-toastify';

const SignIn = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['accessToken']);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm({ mode: 'onBlur', shouldFocusError: true });

  const checkCookie = () => {
    if (cookies.accessToken) {
      navigate('/mydashboard');
    }
  };

  const handleSubmitLogin: SubmitHandler<FieldValues> = async (data) => {
    const result = await postSignIn(data.email, data.password);

    if (result?.status === 404) {
      return alert(AUTH_ERROR_MESSAGES.USER_NOT_FOUND);
    }

    if (result?.status === 400) {
      setError('password', {
        type: 'serverError',
        message: result?.data.message,
      });
      return;
    }

    if (typeof result !== 'number' && result?.data?.accessToken) {
      setCookie('accessToken', result?.data?.accessToken, {
        path: '/',
      }); // 유저 정보 쿠키 저장
      dispatch(login(result.data)); // 유저 정보 저장
      toast.success(AUTH_MESSAGES.LOGIN_SUCCESS);
      navigate('/mydashboard');
    }
  };

  useEffect(() => {
    checkCookie();
  });

  return (
    <StSignInContainer>
      <div className='container__box'>
        <h1>
          <Link to='/'>
            <img src='assets/image/logos/largeLogo.svg' alt='랜딩 페이지로 이동하려면 클릭' />
          </Link>
        </h1>
        <h3>오늘도 만나서 반가워요!</h3>
        <form onSubmit={handleSubmit(handleSubmitLogin)}>
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
            placeholder='비밀번호를 입력해 주세요.'
            label='비밀번호'
          />
          <div className='form__submit-button'>
            <FullButton disabled={!isValid}>로그인</FullButton>
          </div>
        </form>
        <h5>
          회원이 아니신가요? <Link to='/sign-up'>회원가입하기</Link>
        </h5>
      </div>
    </StSignInContainer>
  );
};

export default SignIn;
