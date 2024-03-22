import StEditContainer from './style';
import EditTitleAndColorChanger from '@/components/edit-title-color-changer';
import BackButton from '@/components/backbutton';
import DashboardMemberList from '@/components/dashboard-member-list';

const DashboardEdit = () => {
  return (
    <StEditContainer>
      {/* //todo */}
      <BackButton />
      <EditTitleAndColorChanger />
      <DashboardMemberList />
      {/* //대시보드 멤버들 리스트 (페이지 네이션으로) <DashboardMembersList>
    //초대내역 <DashboardInvite>
    //대시보드 삭제하기 <InvitationLog> */}
    </StEditContainer>
  );
};

export default DashboardEdit;
