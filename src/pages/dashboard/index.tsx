import { useSelector } from 'react-redux';

const DashBoard = () => {
  const user = useSelector((state) => state?.user?.value);
  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.nickname}</h1>
      <h1>{user.email}</h1>
      <h1>{user.profileImageUrl}</h1>
      <h1>{user.createdAt}</h1>
      <h1>{user.updatedAt}</h1>
    </div>
  );
};

export default DashBoard;
