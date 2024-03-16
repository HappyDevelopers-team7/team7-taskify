/**
 * violet과 black, gray는 hex 코드 앞글자 두개를 따왔음.
 * 사용법 아래 코드 참고
 * background-color: ${({ theme }) => theme.color.white}; // 흰색
 */

const theme = {
  deviceSize: {
    mobile: 'screen and (max-width: 768px)',
    tablet: 'screen and (max-width: 1025px)',
  },
  color: {
    white: '#ffffff',
    red: '#D6173A',
    green: '#7AC555',
    purple: '#760DDE',
    orange: '#FFA500',
    blue: '#76A5EA',
    pink: '#E876EA',
    violet: '#5534DA',
    violet_8: '#F1EFFD',
    black: '#000000',
    black_17: '#171717',
    black_33: '#333236',
    black_4b: '#4B4B4B',
    gray_78: '#787486',
    gray_9f: '#9FA6B2',
    gray_d9: '#D9D9D9',
    gray_ee: '#EEEEEE',
    gray_fa: '#FAFAFA',
  },
  dim: 'rgba(0, 0, 0, 0.70)',
};

export { theme };
