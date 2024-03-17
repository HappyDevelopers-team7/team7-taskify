import styled from 'styled-components';

const StDropDownMenu = styled.div`
  position: relative;

  .drop-down-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: ${({ theme }) => theme.color.white};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.color.gray_d9};
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
    padding: 6px;

    li {
      color: ${({ theme }) => theme.color.black_33};
      text-align: center;
      padding: 8px 16px;
      font-size: 1.4rem;
      font-weight: 400;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.color.violet_8};
        color: ${({ theme }) => theme.color.violet};
      }
    }
  }
`;

export default StDropDownMenu;
