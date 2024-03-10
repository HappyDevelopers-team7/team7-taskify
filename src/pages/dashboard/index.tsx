// import API from '@/api/constants';
// import axiosInstance from '@/api/instance/axiosInstance';
// import { login, logout } from '@/redux/userSlice';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const DashBoard = () => {
  // const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user);

  // const checkUserOnReload = async () => {
  //   const accessToken = userData.accessToken;

  //   if (accessToken) {
  //     try {
  //       // 토큰을 사용하여 서버에서 사용자 정보 가져오기
  //       const response = await axiosInstance.get(API.USER.MY_INFO, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });

  //       const responseData = response.data;
  //       console.log(responseData);

  //       // 가져온 사용자 정보를 리덕스 스토어에 저장
  //       dispatch(login(responseData));
  //     } catch (error) {
  //       console.error('유저 데이터 받아오는데 실패하였습니다.: ', error);
  //       dispatch(logout());
  //     }
  //   }
  // };

  // useEffect(() => {
  //   checkUserOnReload();
  // });
  return (
    <div>
      <h1>{userData.user.id}</h1>
      <h1>{userData.user.nickname}</h1>
      <h1>{userData.user.email}</h1>
      <h1>{userData.user.profileImageUrl}</h1>
      <h1>{userData.user.createdAt}</h1>
      <h1>{userData.user.updatedAt}</h1>
    </div>
  );
};

export default DashBoard;
