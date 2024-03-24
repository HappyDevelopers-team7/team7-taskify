import StEditContainer from './style';
import EditTitleAndColorChanger from '@/components/edit-title-color-changer';
import BackButton from '@/components/backbutton';
import DashboardMemberList from '@/components/edit-dashboard-member-list';
import EditdeleteButton from '@/components/edit-delete-button';
import EditDashBoardInviteList from '@/components/edit-dashboard-invite-list';
import { useParams } from 'react-router-dom';

const DashboardEdit = () => {
  const { id } = useParams();

  return (
    <StEditContainer>
      <BackButton />
      <EditTitleAndColorChanger />
      <DashboardMemberList />
      <EditDashBoardInviteList />
      <EditdeleteButton dashboardId={id} />
    </StEditContainer>
  );
};

export default DashboardEdit;
