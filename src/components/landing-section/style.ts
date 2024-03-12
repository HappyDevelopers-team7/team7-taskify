import styled from 'styled-components';

const StSection = styled.div`
  width: 1200px;
  height: 600px;
  margin: 90px auto;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.black_17};
  display: flex;

  @media (min-width: 768px) and (max-width: 1199px) {
    flex-direction: column;
  }

  .point-and-description {
    flex-direction: column;
  }

  .section-point {
    color: ${({ theme }) => theme.color.gray_9f};
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 100px 60px 0;
  }

  .section-description {
    color: ${({ theme }) => theme.color.white};
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    margin-left: 60px;
    margin-top: 100px;

    span {
      color: ${({ theme }) => theme.color.gray_d9};
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-family: Pretendard;

      font-size: 4.8rem;
      font-style: normal;
      font-weight: 700;
      line-height: 64px;
    }
  }

  img {
    display: flex;
    justify-content: center;
    margin-top: auto;
  }
`;

export const StSectionRightImage = styled(StSection)`
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 664px;
    height: 100%;

    img {
      width: 519.39px;
      height: 435px;
      margin-top: 220px;
      margin-left: auto;
    }
  }
`;

export const StSectionLeftImage = styled(StSection)`
  img {
    margin-left: 108px;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 664px;
    height: 100%;
    flex-direction: column-reverse;

    img {
      width: 360.438px;
      height: 415px;
      align-items: center;
      margin: 240px auto 0;
    }
  }
`;

export const StSmallSection = styled.div`
  // 작은 섹션 컨테이너 스타일
  width: 1200px;
  height: 600px;
  margin: 90px auto;

  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .small-section-title {
    color: ${({ theme }) => theme.color.white};
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 36px;
  }

  .setting-items-container {
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1199px) {
      flex-direction: column;
      gap: 50px;
    }
  }
`;

export const StSettingItem = styled.div`
  // 설정 항목 스타일
  .image-container {
    width: 378px;
    height: 260px;
    flex-shrink: 0;
    border-radius: 8px 8px 0px 0px;
    background: ${({ theme }) => theme.color.black_4b};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description-container {
    width: 378px;
    height: 124px;
    flex-shrink: 0;
    border-radius: 0px 0px 8px 8px;
    background: ${({ theme }) => theme.color.black_17};
    padding: 33px;

    .description-title {
      color: ${({ theme }) => theme.color.white};
      font-family: Pretendard;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .description-content {
      color: ${({ theme }) => theme.color.white};
      font-family: Pretendard;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-top: 18px;
    }
  }
`;
