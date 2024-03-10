import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import { Dashboards } from '@/pages/dashboard';
import axios from 'axios';

interface Props {
  dashboards: Dashboards[];
  spreadDashboards: (dashboards: Dashboards[]) => void;
  // accessToken: string;
}

const SideMenu = ({ dashboards, spreadDashboards /*accessToken*/ }: Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [maximumPages, setMaximumPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const randomColor = generateRandomHexCode(); // PR전에 지울것!
  const TOKEN_NAME = 'accessToken'; // PR전에 지울것!
  const EXPRIES_IN = 30; // PR전에 지울것!
  const [token, setToken] = useState(''); // PR전에 지울것!

  const login = () => {
    // PR전에 지울것!
    const id = 'jyp1@jyp.com';
    axios
      .post('https://sp-taskify-api.vercel.app/3-7/auth/login', {
        email: id,
        password: '12345678',
      })
      .then((res) => {
        console.log(res.data.accessToken);
        const expires = new Date(Date.now() + EXPRIES_IN * 1000);
        document.cookie = `${TOKEN_NAME}=${res.data.accessToken};expires=${expires.toUTCString()};path=/`;
        setToken(res.data.accessToken);
        alert(`${id}로 로그인 되었습니다`);
      });
  };

  function generateRandomHexCode() {
    // PR전에 지울것!
    const letters = '0123456789ABCDEF';
    return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
  }

  const createDashboard = () => {
    // PR전에 지울것!
    const name = prompt('대시보드 이름을 입력하세요');
    if (name !== null) {
      axios
        .post(
          'https://sp-taskify-api.vercel.app/3-7/dashboards',
          {
            title: name,
            color: randomColor,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(() => viewDashboard());
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
        .then(() => viewDashboard());
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
        spreadDashboards(res.data.dashboards);
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
    viewDashboard();
  }, [currentPage, token]);

  return (
    <Container>
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

        <button className='temp-button' onClick={login} /* PR전에 지울것!*/>
          로그인
        </button>
        <button className='temp-button' onClick={removeDashboard} /* PR전에 지울것!*/>
          삭제
        </button>
      </div>
    </Container>
  );
};

export default SideMenu;
