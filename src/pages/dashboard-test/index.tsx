// MyComponent.tsx 파일

import { AppDispatch, fetchMyInfo, getMyInfo } from '@/redux/userSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MyComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const myData = useSelector(getMyInfo);

  useEffect(() => {
    // 페이지가 로딩될 때 유저 정보를 가져오도록 함
    dispatch(fetchMyInfo());
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome, {myData.user.nickname}!</h1>
      <h1>
        {myData.user.nickname}님의 ID는, {myData.user.id}입니다!
      </h1>
      <h1>
        {myData.user.nickname}님의 이메일은, {myData.user.email}입니다!
      </h1>
      <h1>
        {myData.user.nickname}님의 프로필 사진 url은, {myData.user.profileImageUrl}입니다!
      </h1>
      {/* 나머지 컴포넌트 로직 */}
    </div>
  );
};

export default MyComponent;
