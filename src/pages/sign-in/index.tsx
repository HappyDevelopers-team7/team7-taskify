import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <h1>
      <Link to='/'>
        <img src='assets/image/logos/largeLogo.svg' alt='랜딩 페이지로 이동하려면 클릭' />
      </Link>
    </h1>
  );
};

export default SignIn;
