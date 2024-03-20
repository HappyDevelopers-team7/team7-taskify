import DashboardHeader from '@/components/dashboard-Header';
import SideMenu from '@/components/side-menu';
import { Outlet } from 'react-router-dom';
import StWrapper from './style';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPrevScrollPosition } from '@/redux/modalSlice';
import { debounce } from 'lodash';

const Layout = () => {
  const dispatch = useDispatch();

  const handleScroll = debounce(() => {
    dispatch(setPrevScrollPosition(window.scrollY));
  }, 100); // 디바운싱 대기 시간 (밀리초)

  useEffect(() => {
    dispatch(setPrevScrollPosition(window.scrollY));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <DashboardHeader />
      <main>
        <StWrapper>
          <SideMenu />
          <div id='container'>
            <Outlet />
          </div>
        </StWrapper>
      </main>
    </>
  );
};

export default Layout;
