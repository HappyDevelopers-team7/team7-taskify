import styled from 'styled-components';

interface StListItemProps {
  $stateColor: string;
}

const StListItem = styled.div<StListItemProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .list-item__color {
    width: 8px;
    height: 8px;
    background: ${(props) => props.$stateColor};
    border-radius: 50px;
    margin-right: 16px;
  }

  .list-item__title {
    width: 79%;
    display: flex;
    align-items: center;
    gap: 8px;

    h5 {
      width: 80%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 1.6rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color.black_33};
    }

    span {
      display: block;
      width: 20px;
      height: 16px;
      background: url('assets/image/icons/crownIcon.svg') no-repeat center;
      background-size: contain;
    }
  }

  img {
    width: 18px;
    height: 18px;
  }
`;

export default StListItem;
