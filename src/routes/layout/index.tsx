import DashboardHeader from '@/components/dashboardHeader';
import SideMenu from '@/components/side-menu';
import { Outlet } from 'react-router-dom';
import StWrapper from './style';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCurrentScrollPosition, setPrevScrollPosition } from '@/redux/modalSlice';

const Layout = () => {
  const [currentPos, setCurrentPos] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setCurrentPos(window.scrollY);
      dispatch(setPrevScrollPosition(currentPos));
      dispatch(setCurrentScrollPosition(currentPos));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollY]);
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
