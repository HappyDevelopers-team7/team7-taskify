import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import Cookies from 'js-cookie';
import axiosInstance from '@/api/instance/axiosInstance';
import API from '@/api/constants';

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
  const [selected, setSelected] = useState<number | null>(null);
  const [maximumPages, setMaximumPages] = useState<number>(1);
  const [dashboards, setDashboards] = useState<Dashboards[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [token, setToken] = useState<string>('');
  const scrollHandler = useRef<HTMLDivElement>(null);

  const createDashboard = () => {
    // 대시보드 생성 임시함수
    const generateRandomHexCode = () => {
      const letters = '0123456789ABCDEF';
      return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
    };

    const name = prompt('대시보드 이름을 입력하세요');

    if (name) {
      axiosInstance
        .post(API.DASHBOARDS.DASHBOARDS, {
          title: name,
          color: generateRandomHexCode(),
        })
        .then(() => {
          viewDashboard();
        });
    } else {
      alert('이름을 쓰라고');
    }
  };

  const removeDashboard = () => {
    // 대시보드 삭제 임시함수
    const id = prompt('삭제할 대시보드 id');
    if (id !== null) {
      axiosInstance
        .delete(`${API.DASHBOARDS.DASHBOARDS}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => viewDashboard())
        .catch(() => alert('존재하지 않는 ID입니다.'));
    }
  };

  const viewDashboard = () => {
    axiosInstance
      .get(`${API.DASHBOARDS.DASHBOARDS}?navigationMethod=pagination&page=${currentPage}&size=18`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMaximumPages(Math.ceil(res.data.totalCount / 18));
        setDashboards(res.data.dashboards);
        if (scrollHandler.current) {
          scrollHandler.current.scrollTop = 0;
        }
        console.log(res.data.dashboards); //삭제할 대시보드 ID확인용
      });
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
    setToken(Cookies.get('accessToken') as string);
    viewDashboard();
  }, [currentPage, token]);

  return (
    <Container ref={scrollHandler}>
      <Link to={'/'}>
        <img src='assets/image/logos/sideLogo.png' className='logo' alt='logo-image' />
      </Link>

      <div className='sidemenu-head'>
        <span>Dash Boards</span>
        <img
          src='assets/image/icons/addBoxIcon.svg'
          className='add-button'
          alt='add-button'
          onClick={createDashboard}
        />
      </div>

      <div className='sidemenu-body'>
        <ul className='list'>
          {dashboards.map((data) => (
            <li
              key={data.id}
              className={`dashboard ${selected === data.id ? 'selected' : ''}`}
              onClick={() => handleSelectedDashboard(data.id)}
            >
              <div className='dashboard-color' style={{ background: data.color }} />
              <span>{data.title}</span>
              {data.createdByMe && <img src='assets/image/icons/crownIcon.svg' />}
            </li>
          ))}
        </ul>
      </div>

      <div className='sidemenu-foot'>
        <button className='page-button prev-page' onClick={handlePrevPage}>
          <img
            src={
              currentPage === 1
                ? 'assets/image/icons/arrowForwardIcon(gray-left).svg'
                : 'assets/image/icons/arrowForwardIcon(left).svg'
            }
          />
        </button>
        <button className='page-button next-page' onClick={handleNextPage}>
          <img
            src={
              currentPage === maximumPages
                ? 'assets/image/icons/arrowForwardIcon(gray).svg'
                : 'assets/image/icons/arrowForwardIcon.svg'
            }
          />
        </button>
        <button className='temp-button' onClick={removeDashboard} /*테스트 종료시 삭제*/>
          삭제
        </button>
      </div>
    </Container>
  );
};

export default SideMenu;
