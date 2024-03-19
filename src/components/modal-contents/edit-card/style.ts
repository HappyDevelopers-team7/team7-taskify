import styled from 'styled-components';

const StEditCard = styled.div<{
  $Image: string | null;
  $isStatusClicked: boolean;
  $isAsigneeClicked: boolean;
  $Profile: string | undefined;
  $Tag: string[];
  $NewImage: string | null;
}>`
  height: 65vh;

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

  .input-box::placeholder {
    color: ${({ theme }) => theme.color.gray_9f};
  }

  .input-box.member-list {
    ${(props) => (props.$isAsigneeClicked ? 'display:flex;' : 'display:none;')}
    width: 100%;
    position: absolute;
    top: 85px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
    flex-direction: column;
  }

  .auth-box {
    user-select: none;
    display: flex;
    gap: 16px;
    position: relative;

    .status-box,
    .asignee-box {
      background-image: url('/assets/image/icons/arrowDropDownIcon.svg');
      background-repeat: no-repeat;
      background-position: 170px;
    }

    .auth-box-first-div {
      .status-box {
        width: 217px;
        padding: 13px;
        cursor: pointer;
      }

      .status-list {
        width: 50%;
        ${(props) => (props.$isStatusClicked ? 'display:flex;' : 'display:none;')};
        flex-direction: column;
        gap: 13px;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
        position: absolute;
        top: 85px;

        div {
          padding-left: 28px;
          position: relative;

          img {
            position: absolute;
            left: 0;
          }

          div {
            padding-left: 8px;
            width: fit-content;
            cursor: pointer;
          }
        }
      }
    }

    .auth-box-second-div {
      position: relative;

      .remove-icon {
        position: absolute;
        width: 20px;
        height: 20px;
        left: 50px;
        top: 1px;
        cursor: pointer;
      }

      .asignee-box {
        ${(props) => props.$Profile && 'padding-left: 45px;'}
      }

      .member {
        width: 90%;
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 6px;
        border-radius: 6px;
        cursor: pointer;
      }

      .member:hover {
        background-color: ${({ theme }) => theme.color.violet_8};
      }

      .member.clicked {
        background-color: #a374db;
      }

      .user-image {
        width: 26px;
        height: 26px;
        border-radius: 50%;
      }

      .user-image.in-searchbar {
        position: absolute;
        left: 13px;
        top: 43px;
      }
    }
  }

  .date-box {
    background-image: url('/assets/image/icons/calendarIcon.svg');
    background-repeat: no-repeat;
    background-position: 10px;
    padding-left: 35px;
  }

  .input-box.tag-input {
    margin-bottom: ${(props) => (props.$Tag.length !== 0 ? '0;' : '32px;')};
  }

  .input-box.tag-list {
    ${(props) => (props.$Tag.length !== 0 ? 'display:flex;' : 'display:none;')}
    gap: 6px;
    flex-wrap: wrap;
    border: none;
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
        props.$NewImage
          ? `url(` + props.$NewImage + ')'
          : props.$Image
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

  .file-name {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }

  .hidden {
    display: none;
  }
`;

export default StEditCard;
