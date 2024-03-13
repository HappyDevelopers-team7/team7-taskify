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

  @media (min-width: 375px) and (max-width: 767px) {
    flex-direction: column;
    width: 343px;
    height: auto;
  }

  .point-and-description {
    flex-direction: column;
  }

  .section-point {
    color: ${({ theme }) => theme.color.gray_9f};
    font-size: 2.2rem;
    font-weight: 500;
    line-height: normal;
    margin: 100px 60px 0;

    @media (min-width: 375px) and (max-width: 767px) {
      font-size: 1.8rem;
    }
  }

  .section-description {
    color: ${({ theme }) => theme.color.white};
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 64px;
    margin-left: 60px;
    margin-top: 100px;

    @media (min-width: 375px) and (max-width: 767px) {
      font-size: 3.6rem;
      line-height: 50px;
      text-align: center;
      margin: 60px 0 auto;
    }

    span {
      color: ${({ theme }) => theme.color.gray_d9};
      font-size: 4.8rem;
      font-weight: 700;
      line-height: 64px;

      @media (min-width: 375px) and (max-width: 767px) {
        font-size: 3.6rem;
        line-height: 50px;
      }
    }
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;

    @media (min-width: 375px) and (max-width: 767px) {
      width: 296.112px;
      height: 248px;
      border-radius: 8px;
    }
  }
`;

export const StSectionRightImage = styled(StSection)`
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 664px;
    height: 100%;

    img {
      width: 520px;
      height: 435px;
      margin-top: 220px;
      margin-left: auto;
    }
  }

  @media (min-width: 375px) and (max-width: 767px) {
    img {
      margin: 0 auto;
      margin-top: 190px;
      align-items: center;
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
      width: 360px;
      height: 415px;
      align-items: center;
      margin: 240px auto 0;
    }
  }

  @media (min-width: 375px) and (max-width: 767px) {
    flex-direction: column-reverse;

    img {
      margin: 0 auto;
      margin-top: 190px;
      align-items: center;
    }
  }
`;

export const StSmallSection = styled.div`
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

  @media (min-width: 375px) and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }

  .small-section-title {
    color: ${({ theme }) => theme.color.white};
    font-size: 2.8rem;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 36px;

    @media (min-width: 375px) and (max-width: 767px) {
      text-align: center;
      font-size: 2.2rem;
    }
  }

  .setting-items-container {
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1199px) {
      flex-direction: column;
      gap: 50px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
      width: 100%;
      flex-direction: column;
      margin: 0 auto;
      align-items: center;
      gap: 50px;
    }
  }
`;

export const StSettingItem = styled.div`
  .image-container {
    width: 378px;
    height: 260px;
    border-radius: 8px 8px 0px 0px;
    background: ${({ theme }) => theme.color.black_4b};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 375px) and (max-width: 767px) {
      width: 343px;
      height: 235px;
    }
  }

  .description-container {
    width: 378px;
    height: 124px;
    border-radius: 0px 0px 8px 8px;
    background: ${({ theme }) => theme.color.black_17};
    padding: 33px;

    @media (min-width: 375px) and (max-width: 767px) {
      width: 343px;
      height: 112px;
    }

    .description-title {
      color: ${({ theme }) => theme.color.white};
      font-size: 1.8rem;
      font-weight: 700;
      line-height: normal;
    }

    .description-content {
      color: ${({ theme }) => theme.color.white};
      font-size: 1.6rem;
      font-weight: 500;
      line-height: normal;
      margin-top: 18px;
    }
  }
`;
