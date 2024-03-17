import styled from 'styled-components';

const StCommentReadBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;

  .comment-box {
    width: calc(100% - 42px);
  }

  .comment-head {
    display: flex;
    align-items: center;
    gap: 8px;

    h5 {
      color: ${({ theme }) => theme.color.black_33};
      font-size: 1.4rem;
      font-weight: 600;
    }

    span {
      color: ${({ theme }) => theme.color.gray_9f};
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  .comment-body {
    margin: 6px 0 12px;

    textarea {
      width: 100%;
      color: ${({ theme }) => theme.color.black_33};
      font-size: 1.4rem;
      font-weight: 400;
    }

    p {
      color: ${({ theme }) => theme.color.black_33};
      font-size: 1.4rem;
      font-weight: 400;
    }
  }

  .comment-foot {
    display: flex;
    align-items: center;
    gap: 12px;

    button {
      color: ${({ theme }) => theme.color.gray_9f};
      font-size: 1.2rem;
      font-weight: 400;
      text-decoration: underline;
      transition: 0.15s;

      &:hover {
        color: ${({ theme }) => theme.color.violet};
      }
    }
  }
`;

export default StCommentReadBox;
