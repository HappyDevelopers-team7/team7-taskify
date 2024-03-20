import { AppDispatch, fetchMyInfo, getMyInfo } from '@/redux/myInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './style';
import { Dashboards } from '../side-menu';
import { SetMyInfo } from '@/redux/myInfoSlice';
import { useParams } from 'react-router-dom';
import API from '@/api/constants';
import axiosInstance from '@/api/instance/axiosInstance';
import { ModalRootState, openModal, setOpenModalName } from '@/redux/modalSlice';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import InviteDashboard from '../modal-contents/invite-dashboard';

interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  currentDashboard?: Dashboards;
  id?: string;
}

interface DashboardmembersInfo {
  members: User[];
  totalCount: number;
}

const CONTAINER_SIZE = ['only-one', 'two-members', 'three-members', 'four-members', 'five-members'];
// const MEMBERS_POSITION = ['first', 'second', 'third', 'fourth', 'fifth'];
// const dashboardHeader = ({ currentDashboard }: Props) => {
// 임시
const DashboardHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const myInfo = useSelector(getMyInfo);
  const { id } = useParams();
  const navigate = useNavigate();
  const openModalName = useSelector((state: ModalRootState) => state.modal.openModalName);
  const [currentDashboard, setCurrentDashboard] = useState<Dashboards | undefined>(undefined);
  const [membersInfo, setMembersInfo] = useState<{
    members: User[];
    totalCount: number;
  } | null>(null);

  const handleEditClick = () => {
    navigate(`/dashboard/${id}/edit`);
  };

  const handleClickInviteDashboard = () => {
    dispatch(setOpenModalName('InviteDashboard'));
    dispatch(openModal('InviteDashboard'));
  };
  //상태를 전역으로 관리해서 로그인정보가 바뀌거나 하면 바로 다시 렌더링
  useEffect(() => {
    dispatch(fetchMyInfo());
  }, [dispatch]);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

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

  useEffect(() => {
    const fetchDashboardMemberInfo = async () => {
      try {
        const res = await axiosInstance.get(API.MEMBERS.MEMBERS, {
          params: { page: 1, size: 4, dashboardId: id ?? 1 },
        });
        const resData = await res.data;
        setMembersInfo(resData);
      } catch (error) {
        console.error('Error fetching dashboardMember info:', error);
        // 여기다 에러 로직 추가
      }
    };

    fetchDashboardMemberInfo();
  }, [id]);

  return (
    <Container>
      <DashboardId currentDashboard={currentDashboard} id={id} />
      {/* <div> */}
      <div className='dashboard-right-space'>
        {currentDashboard?.createdByMe && <EditButton onClick={handleEditClick} />}
        <InviteButton onClick={handleClickInviteDashboard} membersInfo={membersInfo} />
        {openModalName === 'InviteDashboard' ? <InviteDashboard id={id || ''} /> : null}
        {membersInfo && <DashboardMembers membersInfo={membersInfo} />}
        <ProfileInfo myInfo={myInfo} />
      </div>
      {/* </div> */}
    </Container>
  );
};

export default DashboardHeader;

interface InviteButtonProps {
  onClick: () => void; // 온클릭이 함수 & 반환 값이 없는걸 명시해둠
  membersInfo: DashboardmembersInfo | null;
}

function InviteButton({ onClick, membersInfo }: InviteButtonProps) {
  let memberTotalCount: string = '';
  switch (membersInfo?.totalCount) {
    case 1:
      memberTotalCount = 'one-man';
      break;
    case 2:
      memberTotalCount = 'two-men';
      break;
    case 3:
      memberTotalCount = 'three-men';
      break;
    case 4:
      memberTotalCount = 'four-men';
      break;
    default:
      memberTotalCount = '';
      break;
  }

  return (
    <button className={`invite-button ${memberTotalCount}`} onClick={onClick}>
      <img src='/assets/image/icons/addBoxIcon.svg' alt='add-boxicon' />
      초대하기
    </button>
  );
}
interface EditButtonProps {
  onClick: () => void; // 온클릭이 함수 & 반환 값이 없는걸 명시해둠
}

function EditButton({ onClick }: EditButtonProps) {
  return (
    <button className='edit-button' onClick={onClick}>
      <img src='/assets/image/icons/settingIcon.svg' alt='setting-icon' />
      관리
    </button>
  );
}

function DashboardId({ currentDashboard, id }: Props) {
  const showIconClass = 'showIcon';
  const hiddenIconClass = 'hiddenIcon';
  const showIcon = currentDashboard?.createdByMe ? showIconClass : hiddenIconClass;
  // const title = currentDashboard ? currentDashboard?.title : '내 대시보드';

  let title = '';
  switch (true) {
    case currentDashboard !== null && currentDashboard !== undefined:
      title = currentDashboard.title;
      break;
    case currentDashboard === null:
      title = '내 대시보드';
      break;
    case id === 'mypage':
      title = '계정관리';
      break;
  }

  return (
    <div className='titlebox'>
      <div>{title}</div>
      <img src='/assets/image/icons/crownIcon.svg' className={showIcon} alt='crown-icon' />
    </div>
  );
}

function DashboardMembers({ membersInfo }: { membersInfo: DashboardmembersInfo }) {
  const extraCount: number = membersInfo.totalCount >= 5 ? membersInfo.totalCount - 4 : 0;
  const slicedMembers = membersInfo.members.slice(0, 5);
  const containerSize = CONTAINER_SIZE[slicedMembers.length - 1];

  const generateColor = (name: string) => {
    const key = name.toUpperCase()[0];

    switch (true) {
      case (key >= 'A' && key < 'F') || (key >= '가' && key < '다'):
        return 'green';
      case (key >= 'F' && key < 'K') || (key >= '다' && key < '바'):
        return 'purple';
      case (key >= 'K' && key < 'Q') || (key >= '바' && key < '아'):
        return 'orange';
      case (key >= 'Q' && key < 'V') || (key >= '아' && key < '타'):
        return 'blue';
      default:
        return 'pink';
    }
  };

  return (
    // 멤버들 먼저가입한 순서대로 출력
    <ul className={`dashboard-info-members-container ${containerSize}`}>
      {slicedMembers.map((member: User) => (
        <li key={member.id}>
          {member.profileImageUrl ? (
            <div className={`myinfo-image`} style={{ backgroundImage: `url(${member?.profileImageUrl})` }}></div>
          ) : (
            <div className={`myinfo-color myinfo-color-${generateColor(member.nickname)}`}>
              <div className='myinfo-initial'>{member.nickname.toUpperCase()[0]}</div>
            </div>
          )}
        </li>
      ))}
      {/* 5명 넘어갈때 몇명더 있는지 해주는 이미지 */}
      {extraCount > 0 && (
        <li>
          <div className='myinfo-color extracolor'>{`+${extraCount}`}</div>
        </li>
      )}
    </ul>
  );
}

function ProfileInfo({ myInfo }: { myInfo: SetMyInfo | null }) {
  //todo
  //프로필 배경색 정해주기
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 메뉴 상태
  const navigate = useNavigate();

  if (!myInfo) {
    return null; // myInfo가 없을 경우 렌더링하지 않음
  }
  let hasImg: boolean = false;
  hasImg = myInfo.profileImageUrl === null ? false : true; //프로필 이미지를 가지고 있는지 체크

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
  if (myInfo && hasImg == false) {
    imageBackgroundColor = generateColor(myInfo.nickname);
  }

  // 드롭다운 나타나게함
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  // 드롭다운 사라지게함
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // 마이페이지로 가게하는 핸들러
  const handleMyPageClick = () => {
    navigate('/my-page');
  };

  // 로그아웃 버튼을 클릭했을 때의 핸들러 함수
  const handleLogout = () => {
    Cookies.remove('accessToken');
    navigate('/');
  };

  return (
    //가져온 정보들을 가지고 여기서 프로필을 띄운다.
    <div className='myinfo' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {hasImg == false ? (
        <div className={`myinfo-color myinfo-color-${imageBackgroundColor}`}>
          <div className='myinfo-initial'>{initial}</div>
        </div>
      ) : (
        <div className='myinfo-image' style={{ backgroundImage: `url(${myInfo?.profileImageUrl})` }}></div>
      )}
      <div className='myinfo-name'>{myInfo?.nickname}</div>
      {isDropdownOpen ? (
        <ul className='drop-down-menu'>
          <Link to={'/my-page'} className='myinfo-mypage-button'>
            <li>
              <button onClick={handleMyPageClick}>마이페이지</button>
            </li>
          </Link>
          <li>
            <button onClick={handleLogout}>로그아웃</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
