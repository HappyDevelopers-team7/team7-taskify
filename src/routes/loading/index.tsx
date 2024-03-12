import LoadingSpinner from '@/components/loading-spinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Loading = () => {
  return (
    /* children 요소가 로딩 완료될 때 까지 suspense안 fallback 요소를 대신 보여준다. = 로딩 */
    <Suspense fallback={<LoadingSpinner />}>
      <Outlet />
    </Suspense>
  );
};

export default Loading;
