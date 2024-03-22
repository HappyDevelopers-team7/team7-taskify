import styled from 'styled-components';

const StCreateCard = styled.div<{
  $Profile: string | undefined;
  $IsDropdown: boolean;
  $Tag: string[];
  $Preview: string | null;
}>`
  height: auto;

  .section-div {
    position: relative;

    h3 {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 10px;

      span {
        color: ${({ theme }) => theme.color.violet};
      }
    }

    .remove-icon {
      position: absolute;
      width: 18px;
      height: 18px;
      left: 50px;
      top: 2px;
      cursor: pointer;
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

    .input-box:focus {
      border-color: ${({ theme }) => theme.color.violet};
    }

    .input-box.asignee-box {
      width: 50%;
      ${(props) => props.$Profile && 'padding-left: 45px;'}
      background-image: url('/assets/image/icons/arrowDropDownIcon.svg');
      background-repeat: no-repeat;
      background-position: 180px;
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

    .input-box.member-list {
      ${(props) => (props.$IsDropdown ? 'display:flex;' : 'display:none;')}
      width: 43%;
      position: absolute;
      top: 85px;
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
      flex-direction: column;
      z-index: 1;

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
    }

    .input-box.description-box {
      height: 96px;
    }

    .date-box {
      background-image: url('/assets/image/icons/calendarIcon.svg');
      background-repeat: no-repeat;
      background-position: 10px;
      padding-left: 35px;
    }

    .tag-input {
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

      label {
        display: inline-block;
        width: 76px;
        height: 76px;
        background-image: url(${(props) => (props.$Preview ? props.$Preview : '/assets/image/icons/modalAddIcon.svg')});
        background-color: #f5f5f5;
        background-repeat: no-repeat;
        background-position: center;
        ${(props) => (props.$Preview ? 'background-size: contain;' : 'background-size: 28px 28px;')}
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
  }
`;

export default StCreateCard;
