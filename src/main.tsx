import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './redux/store/store.ts';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 1.6rem;
  }
`;
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <StyledToastContainer
          position='bottom-center' // 알람 위치 지정
          autoClose={4000} // 자동 off 시간
          hideProgressBar={false} // 진행시간바 숨김
          closeOnClick // 클릭으로 알람 닫기
          rtl={false} // 알림 좌우 반전
          theme='light'
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
