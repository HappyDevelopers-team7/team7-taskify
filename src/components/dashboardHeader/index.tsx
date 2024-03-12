import Container from './style';
// import { Dashboards } from '@/pages/dashboard';

// interface User {
//   id: number;
//   email: string;
//   nickname: string;
//   profileImageUrl: string;
//   createdAt: string;
//   updatedAt: string;
// }

// interface Member extends User { //나중에 멤버들 보여줄떄 사용
//   userId: number;
//   isOwner: boolean;
// }

// interface Props {
//   currentDashboard?: Dashboards;
//   user: User | null;
// }

// const DashboardHeader = ({ currentDashboard, user = null }: Props) => {
const DashboardHeader = () => {
  // const title = currentDashboard ? currentDashboard?.title : '내 대시보드';
  // const showIconClass = 'showIcon';
  // const hiddenIconClass = 'hiddenIcon';
  // let showIcon = currentDashboard?.createdByMe ? showIconClass : hiddenIconClass;

  return (
    <Container>
      <h1>테스트 용 입니다 하하하</h1>
      {/* <div className='titlebox'>
        {title} */}
      {/* className={dashboardInfo?.createdByMe ? 'inline flex-shrink-0' : 'hidden'} */}
      {/* <img src='assets/image/icons/crownlcon.svg' className={showIcon} alt='crown-icon' />
      </div> */}
      {/* <ProfileInfo /> */}
    </Container>
  );
};

export default DashboardHeader;
