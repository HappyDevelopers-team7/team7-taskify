import { ChangeEvent, FormEvent, useState } from 'react';
import StInputSearchContainer from './style';

const InputSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSubmitSearchForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {searchKeyword}
      <form onSubmit={handleSubmitSearchForm}>
        <StInputSearchContainer>
          <img src='/assets/image/icons/searchFileIcon.svg' alt='초대 대시보드 이름 및 초대자 검색' />
          <input type='text' placeholder='검색어를 입력하세요.' onChange={handleChangeSearchKeyword} />
        </StInputSearchContainer>
      </form>
    </>
  );
};

export default InputSearch;
