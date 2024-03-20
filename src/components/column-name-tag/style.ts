import styled from 'styled-components';

const StColumnNameTag = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 11px;
  background: ${({ theme }) => theme.color.violet_8};

  &:before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50px;
    background: ${({ theme }) => theme.color.violet};
  }

  span {
    color: ${({ theme }) => theme.color.violet};
    font-size: 1.2rem;
    font-weight: 400;
    margin-left: 6px;
  }
`;

export default StColumnNameTag;
