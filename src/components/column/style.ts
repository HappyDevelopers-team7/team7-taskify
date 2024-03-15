import styled from 'styled-components';

export const ColumnContainer = styled.div`
  width: 354px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray_fa};
  border-right: 1px solid ${({ theme }) => theme.color.gray_ee};
  flex-shrink: 0;

  .flat {
    background-color: tomato;
  }

  .column-header {
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 20px 24px;

    .column-color {
      width: 8px;
      height: 8px;
      background-color: ${({ theme }) => theme.color.violet};
      border-radius: 50%;
      margin-right: 8px;
    }

    h2 {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      margin-right: 12px;
    }

    .inner-cards {
      width: 20px;
      height: 20px;
      padding: 3px 6px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.color.gray_ee};

      font-size: 12px;
      font-style: normal;
      font-weight: 500;
    }

    img {
      position: absolute;
      right: 20px;
      cursor: pointer;
    }
  }

  .column-body {
    padding: 0px 20px 16px;

    .add-card {
      width: 100%;
      height: 100%;
      padding: 9px 0px 9px;
      display: flex;
      justify-content: center;

      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.gray_d9};
      border-radius: 6px;
    }
  }

  h3 {
    font-size: 3rem;
  }
`;

export const ModalContent = styled.div<{ $Image: string | null; $Text: boolean; $Profile: string | undefined }>`
  height: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.gray_d9};
    border-radius: 5px;
  }

  .first-div {
    position: relative;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .essential {
    color: ${({ theme }) => theme.color.violet};
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
  }

  .input-box.member-list {
    ${(props) => (props.$Text ? 'display:flex;' : 'display:none;')}
    width: 43%;
    position: absolute;
    top: 85px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
    flex-direction: column;
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

  .member:hover {
    background-color: ${({ theme }) => theme.color.violet_8};
  }

  .member.clicked {
    background-color: #a374db;
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

  .upload-button-box {
    position: relative;

    label {
      display: inline-block;
      width: 76px;
      height: 76px;
      background-image: url(${(props) => (props.$Image ? props.$Image : '/assets/image/icons/modalAddIcon.svg')});
      background-color: #f5f5f5;
      background-repeat: no-repeat;
      background-position: center;
      ${(props) => props.$Image && 'background-size: contain;'}
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
`;
