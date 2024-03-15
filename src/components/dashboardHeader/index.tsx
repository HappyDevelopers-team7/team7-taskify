import { AppDispatch, fetchMyInfo, getMyInfo } from '@/redux/myInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import Container from './style';
import { Dashboards } from '../side-menu';
import { SetMyInfo } from '@/redux/myInfoSlice';
import { useParams } from 'react-router-dom';
import API from '@/api/constants';
import axiosInstance from '@/api/instance/axiosInstance';
import { useEffect, useState } from 'react';

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
// export interface DashboardId {
//   currentDashboardId: string;
// }

// const dashboardHeader = ({ currentDashboard }: Props) => {
// 임시
const DashboardHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const myInfo = useSelector(getMyInfo);
  const { id } = useParams();
  const [currentDashboard, setCurrentDashboard] = useState<Dashboards | undefined>(undefined);
  // const [membersInfo, setMembersInfo] = useState<{
  //   members: User[];
  //   totalCount: number;
  // } | null>(null);

  //상태를 전역으로 관리해서 로그인정보가 바뀌거나 하면 바로 다시 렌더링
  useEffect(() => {
    dispatch(fetchMyInfo());
  }, [dispatch]);

  useEffect(() => {
    const fetchDashboardInfo = async () => {
      try {
        if (!id) return;
        const res = await axiosInstance.get(`${API.DASHBOARDS.DASHBOARDS}/${id}`);
        const responseData = await res.data;
        setCurrentDashboard(responseData);
      } catch (error) {
        console.error('Error fetching dashboard info:', error);
        // 여기다 에러 로직 추가
      }
    };

    fetchDashboardInfo();
  }, [id]);

  // useEffect(() => {
  //   const fetchDashboardMemberInfo = async () => {
  //     try {
  //       const res = await axiosInstance.get(API.MEMBERS.MEMBERS, {
  //         params: { dashboardId: id },
  //       });
  //       const resData = await res.data;
  //       setMembersInfo(resData);
  //     } catch (error) {
  //       console.error('Error fetching dashboardMember info:', error);
  //       // 여기다 에러 로직 추가
  //     }
  //   };

  //   fetchDashboardMemberInfo();
  // }, [id]);

  // console.log(myInfo);
  // console.log(myInfo.nickname);
  // console.log(myInfo.nickname.toUpperCase()[0]); // 됨
  // console.log(myInfo.nickname[0]);
  // console.log(myInfo.nickname[0].toUpperCase()); //안됨
  return (
    <Container>
      <DashboardId currentDashboard={currentDashboard} />
      <div>
        {/* <inviteButton /> */}
        {/* <DashboardMembers /> */}
        <ProfileInfo myInfo={myInfo} />
      </div>
    </Container>
  );
};

export default DashboardHeader;

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

// function DashboardMembers({ dashboardMembers }) {}

function ProfileInfo({ myInfo }: { myInfo: SetMyInfo | null }) {
  //todo
  //프로필 배경색 정해주기

  if (!myInfo) {
    console.log('마이인포가 없다!');
    return null; // myInfo가 없을 경우 렌더링하지 않음
  }

  const COLORS = ['green', 'purple', 'orange', 'blue', 'pink'] as const;

  const generateColor = (name: string) => {
    const key = name.toUpperCase()[0];

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

  const initial = myInfo!.nickname.toUpperCase()[0];

  let imageBackgroundColor: string = '';
  if (myInfo && myInfo.profileImageUrl == null) {
    imageBackgroundColor = generateColor(myInfo.nickname);
  }

  return (
    //가져온 정보들을 가지고 여기서 프로필을 띄운다.
    <div className='myinfo'>
      <div className={`myinfo-color myinfo-color-${imageBackgroundColor}`}>
        <div className='myinfo-initial'>{initial}</div>
      </div>
      <div className='myinfo-name'>{myInfo?.nickname}</div>
    </div>
  );
}
