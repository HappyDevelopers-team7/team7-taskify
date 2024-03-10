import { useState } from 'react';
import SideMenu from '@/components/side-menu';

export type Dashboards = {
  color: string;
  createdAt: string;
  createdByMe: boolean;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
};

const DashBoard = () => {
  const [dashboards, setDashboards] = useState<Dashboards[]>([]);

  const spreadDashboards = (dashboards: Dashboards[]) => {
    const data = dashboards;
    setDashboards(data);
  };

  return (
    <>
      <SideMenu dashboards={dashboards} spreadDashboards={spreadDashboards} /*accessToken={accessToken}*/ />
    </>
  );
};

export default DashBoard;
