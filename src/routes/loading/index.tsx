import LoadingSpinner from '@/components/loading-spinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Loading = () => {
  return (
    /* children 요소가 로딩 완료될 때 까지 suspense안 fallback 요소를 대신 보여준다. = 로딩 */
    <Suspense fallback={<LoadingSpinner />}>
      {/* TODO: 우선 main 태그 이렇게 주고 헤더 및 snb 작업이 완료되면 수정하자. */}
      <main>
        <Outlet />
      </main>
    </Suspense>
  );
};

export default Loading;
