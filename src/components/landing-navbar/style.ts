import styled from 'styled-components';

export const StNavbar = styled.div`
  height: 70px;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 40px;
`;

export const StNavbarSigninSignup = styled.div`
  width: 120px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;
