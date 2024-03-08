import { createGlobalStyle, css } from 'styled-components';
import resetCss from './reset/resetCss';

const GlobalStyle = createGlobalStyle`${css`
  ${resetCss}
`}
`;

export default GlobalStyle;
