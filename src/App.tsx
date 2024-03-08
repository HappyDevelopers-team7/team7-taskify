import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme/theme';
import { ThemeProvider } from 'styled-components';

/**
 * ThemeProvider 안에 공통으로 사용될 window 사이즈 및 컬러들을 모아두었음.
 * globalStyle 안에 reset 넣어둠.
 * 언제든지 공통으로 사용되어질 css를 추가해도 됨.
 */

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
