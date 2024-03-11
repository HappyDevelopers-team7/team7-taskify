import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import axios from 'axios';
import Cookies from 'js-cookie';

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

  const generateRandomHexCode = () => {
    // PR전에 지울것!
    const letters = '0123456789ABCDEF';
    return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
  };

  const createDashboard = () => {
    // PR전에 지울것!
    const name = prompt('대시보드 이름을 입력하세요');
    if (name) {
      axios
        .post(
          'https://sp-taskify-api.vercel.app/3-7/dashboards',
          {
            title: name,
            color: generateRandomHexCode(),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(() => {
          viewDashboard();
        });
    } else {
      alert('대시보드 이름을 입력하세요');
    }
  };

  const removeDashboard = () => {
    // PR전에 지울것!
    const id = prompt('삭제할 대시보드 id');
    if (id !== null) {
      axios
        .delete(`https://sp-taskify-api.vercel.app/3-7/dashboards/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => viewDashboard())
        .catch(() => alert('존재하지 않는 ID입니다.'));
    }
  };

  const handleSelectedDashboard = (id: number) => {
    setSelected(id);
  };

  const viewDashboard = () => {
    axios
      .get(`https://sp-taskify-api.vercel.app/3-7/dashboards?navigationMethod=pagination&page=${currentPage}&size=18`, {
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
        console.log(res.data.dashboards);
      });
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
        <button className='temp-button' onClick={removeDashboard} /* PR전에 지울것!*/>
          삭제
        </button>
      </div>
    </Container>
  );
};

export default SideMenu;
