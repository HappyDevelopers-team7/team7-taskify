import MyDashBoardList from '@/components/my-dashboard-list';
import StDashBoardWrap from './style';
import { useDispatch, useSelector } from 'react-redux';
import { ModalRootState, openModal, setOpenModalName } from '@/redux/modalSlice';
import CreateDashboard from '@/components/modal-contents/create-dashboard';
import InvitedList from '@/components/Invited-list';

const DashBoard = () => {
  const dispatch = useDispatch();
  const openModalName = useSelector((state: ModalRootState) => state.modal.openModalName);

  const handleOpenCreateDashboardModal = () => {
    dispatch(setOpenModalName('createDashboard'));
    dispatch(openModal('createDashboard'));
  };

  return (
    <>
      <StDashBoardWrap>
        <MyDashBoardList handleCreateDashboard={handleOpenCreateDashboardModal} />
        <InvitedList />
      </StDashBoardWrap>
      {openModalName === 'createDashboard' ? <CreateDashboard /> : null}
    </>
  );
};

export default DashBoard;
