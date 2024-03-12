import { AppDispatch, fetchMyInfo, getMyInfo, getStatus } from '@/redux/myInfoSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DashBoardTest = () => {
  const dispatch = useDispatch<AppDispatch>();
  // useSelector로 전역 정보 가져옴
  const myData = useSelector(getMyInfo);
  const myDataLoading = useSelector(getStatus);

  useEffect(() => {
    // 페이지가 로딩될 때 내 로그인 정보를 가져오도록 함
    dispatch(fetchMyInfo());
  }, [dispatch]);

  return (
    <div>
      {myDataLoading === 'loading' ? (
        <h1>잠시만 기달료</h1>
      ) : (
        <>
          <h1>Welcome, {myData.nickname}!</h1>
          <h1>
            {myData.nickname}님의 ID는, {myData.id}입니다!
          </h1>
          <h1>
            {myData.nickname}님의 이메일은, {myData.email}입니다!
          </h1>
          <h1>
            {myData.nickname}님의 프로필 사진 url은, {myData.profileImageUrl}입니다!
          </h1>
        </>
      )}
    </div>
  );
};

export default DashBoardTest;
