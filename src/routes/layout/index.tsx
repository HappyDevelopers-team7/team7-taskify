import DashboardHeader from '@/components/dashboardHeader';
import SideMenu from '@/components/side-menu';
import { Outlet } from 'react-router-dom';
import StWrapper from './style';

const Layout = () => {
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
