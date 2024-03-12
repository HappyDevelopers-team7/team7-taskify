import Cookies from 'js-cookie';
import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  children?: ReactElement;
  authentication: boolean;
}

/**
 *
 * @param 로그인 인증 필요 여부를 받아와야함 (로그인 필요 = true / 로그인 필요 x = false)
 * @returns
 */
const PrivateRoutes = ({ authentication }: PrivateRouteProps): React.ReactElement | null => {
  // 로그인 했을 경우 true
  // 로그인 하지않았을 경우 false
  const isAuthenticated = !!Cookies.get('accessToken');

  if (authentication) {
    // 로그인 상태일 때 접근 가능
    return isAuthenticated === null || isAuthenticated === false ? <Navigate to='/sign-in' /> : <Outlet />;
  } else {
    // 로그인 상태가 아닐때만 접근 가능
    return isAuthenticated === null || isAuthenticated === false ? <Outlet /> : <Navigate to='/dashboard' />;
  }
};

export default PrivateRoutes;
