import { ChangeEvent, FormEvent, useState } from 'react';
import StInputSearchContainer from './style';
import { RootState, filterInvitationsByTitle, updateInvitationList } from '@/redux/invitationSlice';
import { useDispatch, useSelector } from 'react-redux';

const InputSearch = () => {
  const dispatch = useDispatch();
  const initialInvitationList = useSelector((state: RootState) => state.invitationList.initialList);
  const updatedInvitationList = useSelector((state: RootState) => state.invitationList.updatedList);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleClickDeleteValue = () => {
    setSearchKeyword('');
    dispatch(updateInvitationList(initialInvitationList));
  };

  const handleSubmitSearchForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchKeyword) {
      const filteredInvitationList = filterInvitationsByTitle(updatedInvitationList, searchKeyword);
      dispatch(updateInvitationList(filteredInvitationList));
    } else {
      dispatch(updateInvitationList(initialInvitationList));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitSearchForm}>
        <StInputSearchContainer>
          <img src='/assets/image/icons/searchFileIcon.svg' alt='초대 대시보드 이름 및 초대자 검색' />
          <input
            value={searchKeyword}
            type='text'
            placeholder='검색어를 입력하세요.'
            onChange={handleChangeSearchKeyword}
          />
          {searchKeyword ? (
            <button type='button' onClick={handleClickDeleteValue}>
              <img src='/assets/image/icons/closeIcon.svg' />
            </button>
          ) : null}
        </StInputSearchContainer>
      </form>
    </>
  );
};

export default InputSearch;
