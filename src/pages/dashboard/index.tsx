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

  return (
    <>
      <StDashBoardWrap>
        <MyDashBoardList handleCreateDashboard={handleOpenCreateDashboardModal} />
      </StDashBoardWrap>
      {openModalName === 'createDashboard' ? <CreateDashboard /> : null}
    </>
  );
};

export default DashBoard;
