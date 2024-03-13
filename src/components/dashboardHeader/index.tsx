import Container from './style';
import { Dashboards } from '../side-menu';
// import { useSelector } from 'react-redux';
// import { getMyInfo, SetMyInfo } from '@/redux/myInfoSlice';
import { SetMyInfo } from '@/redux/myInfoSlice';
// import { useEffect, useState } from 'react';

// interface User {
//   id: number;
//   email: string;
//   nickname: string;
//   profileImageUrl: string;
//   createdAt: string;
//   updatedAt: string;
// }

interface Props {
  currentDashboard?: Dashboards;
}

// const dashboardHeader = ({ currentDashboard }: Props) => {
// 임시
const dashboardHeader = () => {
  const currentDashboard = {
    id: 0,
    title: '대시보드일까?',
    color: 'string',
    createdAt: '2024-03-13T13:09:30.708Z',
    updatedAt: '2024-03-13T13:09:30.708Z',
    createdByMe: true,
    userId: 0,
  };

  //임시
  const myInfo = {
    id: 0,
    email: 'jyp1@jyp.com',
    nickname: '준용용',
    profileImageUrl: null,
    createdAt: '2024-03-13T13:09:30.708Z',
    updatedAt: '2024-03-13T13:09:30.708Z',
  };

  //전역에서 내 로그인정보 가져옴
  // const myInfo = useSelector(getMyInfo);

  // const [myInfo, setMyInfo] = useState<User | null>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getMyInfo();
  //       if (res) {
  //         setMyInfo(res.data);
  //       } else {
  //         console.log('profile정보를 가져오지 못했습니다.');
  //       }
  //     } catch (error) {
  //       console.log('profile정보를 가져오지 못했습니다.');
  //     }
  //   };
  //   fetchData();
  // }, []);
  console.log(myInfo.nickname);
  return (
    <Container>
      <DashboardId currentDashboard={currentDashboard} />
      <ProfileInfo myInfo={myInfo} />
    </Container>
  );
};

export default dashboardHeader;

function DashboardId({ currentDashboard }: Props) {
  const showIconClass = 'showIcon';
  const hiddenIconClass = 'hiddenIcon';
  const title = currentDashboard ? currentDashboard?.title : '내 대시보드';
  const showIcon = currentDashboard?.createdByMe ? showIconClass : hiddenIconClass;

  return (
    <div className='titlebox'>
      <div>{title}</div>
      <img src='/assets/image/icons/crownIcon.svg' className={showIcon} alt='crown-icon' />
    </div>
  );
}

function ProfileInfo({ myInfo }: { myInfo: SetMyInfo | null }) {
  //프로필 배경색 정해주기

  const COLORS = ['green', 'purple', 'orange', 'blue', 'pink'] as const;
  type COLORS_TYPE = 'green' | 'purple' | 'orange' | 'blue' | 'pink';

  const generateColor = (name: string): COLORS_TYPE => {
    const key = name[0].toUpperCase();

    switch (true) {
      case (key >= 'A' && key < 'F') || (key >= '가' && key < '다'):
        return COLORS[0];
      case (key >= 'F' && key < 'K') || (key >= '다' && key < '바'):
        return COLORS[1];
      case (key >= 'K' && key < 'Q') || (key >= '바' && key < '아'):
        return COLORS[2];
      case (key >= 'Q' && key < 'V') || (key >= '아' && key < '타'):
        return COLORS[3];
      default:
        return COLORS[4];
    }
  };

  const initial = myInfo!.nickname[0].toUpperCase();

  let imageBackgroundColor: string = '';
  if (myInfo && myInfo.profileImageUrl == null) {
    imageBackgroundColor = generateColor(myInfo.nickname);
  }

  return (
    //가져온 정보들을 가지고 여기서 프로필을 띄운다.
    <div className='myinfo'>
      <div className={`myinfo-color myinfo-color-${imageBackgroundColor}`}>
        {/* 이름 첫글자 딴 거 나오게하는 컴포넌트 넣기 */}
        <div>{initial}</div>
      </div>
      <div className='myinfo-name'>{myInfo?.nickname}</div>
    </div>
  );
}
