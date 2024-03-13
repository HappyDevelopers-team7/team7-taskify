import MyDashBoardList from '@/components/my-dashboard-list';
import StDashBoardWrap from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, openModal, setOpenModalName } from '@/redux/modalSlice';
import CreateDashboard from '@/components/modal-contents/create-dashboard';

const DashBoard = () => {
  const dispatch = useDispatch();
  const openModalName = useSelector((state: RootState) => state.modal.openModalName);

  const handleOpenCreateDashboardModal = () => {
    // 대시보드 생성 모달을 열어준다.
    dispatch(setOpenModalName('createDashboard'));
    dispatch(openModal('createDashboard'));
  };

  // 모달 하나 이상 열때 아래와 같이 반복
  const handleOpenTestModal = () => {
    dispatch(setOpenModalName('testModal'));
    dispatch(openModal('testModal'));
  };

  return (
    <>
      <StDashBoardWrap>
        <MyDashBoardList handleCreateDashboard={handleOpenCreateDashboardModal} />
        <button onClick={handleOpenTestModal} type='button'>
          테스트 모달 열기
        </button>
      </StDashBoardWrap>
      {openModalName === 'createDashboard' ? <CreateDashboard /> : null}
    </>
  );
};

export default DashBoard;
