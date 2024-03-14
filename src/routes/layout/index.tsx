import DashboardHeader from '@/components/dashboardHeader';
import SideMenu from '@/components/side-menu';
import { Outlet } from 'react-router-dom';
import StWrapper from './style';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPrevScrollPosition } from '@/redux/modalSlice';

const Layout = () => {
  const dispatch = useDispatch();

  const handleScroll = () => {
    dispatch(setPrevScrollPosition(window.scrollY));
  };

  useEffect(() => {
    dispatch(setPrevScrollPosition(window.scrollY));
    // 혹시 여기에 Intersection Observer 의 사용이 필요할까요?
    window.addEventListener('scroll', handleScroll);
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
