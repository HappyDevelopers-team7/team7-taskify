import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from './style';
import { useDispatch, useSelector } from 'react-redux';
import { ModalRootState, openModal, setOpenModalName } from '@/redux/modalSlice';
import { DashBoardRootState, setSideDashboardList } from '@/redux/dashboardListSlice';
import { getSideDashboardList } from '@/api/getSideDashboardList';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import CreateDashboard from '../modal-contents/create-dashboard';

export type Dashboards = {
  color: string;
  createdAt: string;
  createdByMe: boolean;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
};

const SideMenu = () => {
  const dispatch = useDispatch();
  const openModalName = useSelector((state: ModalRootState) => state.modal.openModalName);
  const sideDashboardList = useSelector((state: DashBoardRootState) => state.dashboardList.sideDashboardList);
  const [selected, setSelected] = useState<number | null>(null);
  const [maximumPages, setMaximumPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const scrollHandler = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClickCreateDashboard = () => {
    dispatch(setOpenModalName('createSideDashboard'));
    dispatch(openModal('createSideDashboard'));
  };

  const setSideDashboardListResult = async () => {
    try {
      const result = await getSideDashboardList(currentPage);
      if (result?.status === 401) {
        toast.error('액세스 토큰이 만료되었거나 유효하지 않습니다.');
        navigate('/');
        return;
      }
      dispatch(setSideDashboardList(result.dashboards));
      setMaximumPages(Math.ceil(result.totalCount / 18));
    } catch (e) {
      const error = e as AxiosError;
      console.error(error.response);
    }
  };

  const handleSelectedDashboard = (id: number) => {
    setSelected(id);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < maximumPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setSideDashboardListResult();
  }, [dispatch, currentPage]);

  return (
    <>
      <Container ref={scrollHandler}>
        <Link to={'/'}>
          <img src='/assets/image/logos/mediumLogo.svg' className='logo' alt='logo-image' />
        </Link>

        <div className='sidemenu-head'>
          <span>Dash Boards</span>
          <img
            src='/assets/image/icons/addBoxIcon.svg'
            className='add-button'
            alt='add-icon'
            onClick={handleClickCreateDashboard}
          />
        </div>

        <div className='sidemenu-body'>
          <ul className='list'>
            {sideDashboardList.map((data) => (
              <li
                key={data.id}
                className={`dashboard ${selected === data.id ? 'selected' : ''}`}
                onClick={() => {
                  handleSelectedDashboard(data.id);
                  navigate(`/dashboard/${data.id}`);
                }}
              >
                <div className='dashboard-color' style={{ background: data.color }} />
                <span>{data.title}</span>
                {data.createdByMe && <img src='/assets/image/icons/crownIcon.svg' alt='crown-icon' />}
              </li>
            ))}
          </ul>
        </div>

        <div className='sidemenu-foot'>
          <button type='button' className='page-button prev-page' onClick={handlePrevPage}>
            <img
              src={
                currentPage === 1
                  ? '/assets/image/icons/arrowForwardIconGrayLeft.svg'
                  : '/assets/image/icons/arrowForwardIconLeft.svg'
              }
              alt='prev-icon'
            />
          </button>
          <button type='button' className='page-button next-page' onClick={handleNextPage}>
            <img
              src={
                currentPage === maximumPages
                  ? '/assets/image/icons/arrowForwardIconGray.svg'
                  : '/assets/image/icons/arrowForwardIcon.svg'
              }
              alt='next-icon'
            />
          </button>
        </div>
      </Container>
      {openModalName === 'createSideDashboard' ? <CreateDashboard /> : null}
    </>
  );
};

export default SideMenu;
