import styled from 'styled-components';

export const StSectionLeftImage = styled.div`
  width: 1200px;
  height: 600px;
  margin: 90px auto;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--black-black_171717, #171717);
  display: flex;

  .point-and-description {
    display: flex;
    flex-direction: column;
  }

  .section-point {
    color: var(--gray-gray_9FA6B2, #9fa6b2);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 100px 60px 0;
  }

  .section-description {
    color: var(--white-white_FFFFFF, #fff);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    margin-left: 60px;
    margin-top: 100px;

    span {
      color: var(--gray-gray_D9D9D9, #d9d9d9);
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-family: Pretendard;

      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 64px;
    }
  }

  img {
    display: flex;
    justify-content: center;
    align-items: right;
    flex-shrink: 0;
    margin-top: auto;
    margin-left: 108px;
  }
`;

export const StSectionRightImage = styled(StSectionLeftImage)`
  justify-content: space-between;
`;

export const StSmallSection = styled.div`
  // 작은 섹션 컨테이너 스타일
`;

export const StSettingItem = styled.div`
  // 설정 항목 스타일
`;
