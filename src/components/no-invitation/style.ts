import styled from 'styled-components';

const StNoInvitationContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
  }

  h5 {
    color: ${({ theme }) => theme.color.gray_9f};
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 24px;
  }
`;

export default StNoInvitationContainer;
