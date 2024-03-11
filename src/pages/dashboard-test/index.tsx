// import API from '@/api/constants';
// import axiosInstance from '@/api/instance/axiosInstance';
// import { login, logout } from '@/redux/userSlice';
// import { useEffect } from 'react';
import { getMyInfo } from '@/api/getMyInfo';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const DashBoard = () => {
  const handleMyInfo = async () => {
    const res = await getMyInfo();
    console.log(res);
  };

  useEffect(() => {
    handleMyInfo();
  });
  // const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user);
  return (
    <div>
      <h1>{userData.accessToken}</h1>
    </div>
  );
};

export default DashBoard;
