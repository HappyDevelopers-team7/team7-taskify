import styled from 'styled-components';

const StEditCard = styled.div<{ $Image: string | null }>`
  height: 65vh;

  .first-div {
    display: flex;
    gap: 16px;

    .status-box,
    .asignee-box {
      background-image: url('/assets/image/icons/arrowDropDownIcon.svg');
      background-repeat: no-repeat;
      background-position: 170px;
    }
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 10px;
    span {
      color: ${({ theme }) => theme.color.violet};
    }
  }

  .input-box {
    width: 100%;
    padding: 15px 0px 15px 16px;
    margin-bottom: 32px;

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.color.gray_d9};
    background: ${({ theme }) => theme.color.white};

    font-size: 1.6rem;
  }

  .upload-button-box {
    position: relative;

    .pencil-icon {
      position: absolute;
      top: 25px;
      left: 20px;
      cursor: pointer;
    }

    label {
      display: inline-block;
      width: 76px;
      height: 76px;
      background-image: ${(props) =>
        props.$Image
          ? 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(' + props.$Image + ')'
          : "url('/assets/image/icons/modalAddIcon.svg')"};
      background-color: #f5f5f5;
      background-repeat: no-repeat;
      background-position: center;
      ${(props) => (props.$Image ? 'background-size: contain;' : 'background-size: 28px 28px;')}
      border-radius: 6px;
      cursor: pointer;
    }

    .upload-button {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }
`;

export default StEditCard;
