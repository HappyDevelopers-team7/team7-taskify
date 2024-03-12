import DashboardHeader from '@/components/dashboardHeader';
import SideMenu from '@/components/side-menu';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <DashboardHeader />
      <main>
        <SideMenu />
        <Outlet />
        <h1>layout</h1>
      </main>
    </>
  );
};

export default Layout;
