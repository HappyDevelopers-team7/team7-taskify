import StInputSearchContainer from './style';

const InputSearch = () => {
  return (
    <>
      <StInputSearchContainer>
        <img src='/assets/image/icons/searchFileIcon.svg' alt='초대 대시보드 이름 및 초대자 검색' />
        <input type='text' placeholder='검색어를 입력하세요.' />
      </StInputSearchContainer>
    </>
  );
};

export default InputSearch;
