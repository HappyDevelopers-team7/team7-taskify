import styled from 'styled-components';

const StDropDownMenu = styled.div`
  position: relative;

  .more-button {
    width: 28px;
    height: 28px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .drop-down-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: ${({ theme }) => theme.color.white};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.color.gray_d9};
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
    padding: 6px;
    z-index: 10;

    li {
      button {
        color: ${({ theme }) => theme.color.black_33};
        text-align: center;
        padding: 8px 16px;
        font-size: 1.4rem;
        font-weight: 400;
        border-radius: 4px;

        &:hover {
          background: ${({ theme }) => theme.color.violet_8};
          color: ${({ theme }) => theme.color.violet};
        }
      }
    }
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    .more-button {
      width: 20px;
      height: 20px;
    }
  }
`;

export default StDropDownMenu;
