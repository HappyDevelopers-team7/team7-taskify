import { Link, useNavigate } from 'react-router-dom';
import StSignInContainer from './style';
import AuthInput from '@/components/auth-input';
import FullButton from '@/components/full-button';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { postSignIn } from '@/api/postSignIn';
import { emailPattern, passwordPattern } from '@/constants/regex';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

const SignIn = () => {
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

    if (result === 404) {
      return alert('존재하지 않는 유저입니다.');
    }
    // TODO : 에러 메시지 서버 쪽에서 받아올 수 있으니 확인하여 수정 필요
    if (result === 400) {
      setError('email', {
        type: 'serverError',
        message: '이메일을 다시 확인해 주세요.',
      });
      return;
    }

    if (typeof result !== 'number' && result?.data?.accessToken) {
      setCookie('accessToken', result?.data?.accessToken, {
        path: '/',
      });
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
              required: '이메일을 입력해 주세요.',
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
              required: '비밀번호를 입력해 주세요.',
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
