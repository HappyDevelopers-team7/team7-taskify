import ModalContainer from '@/components/modal-container';
// import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ChangeEvent, MouseEvent, useEffect, useState, useRef } from 'react';
import { closeModal } from '@/redux/modalSlice';
import StEditCard from './style';
import { CardObjectType } from '@/types/cardObjectType';
import ColumnNameTag from '@/components/column-name-tag';
import { dashboardIdTypes } from '@/types/dashboardIdTypes';
import LoadingSpinner from '@/components/loading-spinner';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import dateExtractor from '@/utils/dateExtractor';

type Type = {
  title: string;
  description: string;
  dueDate: string | null;
};

const EditCard = ({ card, thisColumn, columns, memberData }: CardObjectType) => {
  const dispatch = useDispatch();
  const today = new Date();
  const asigneeRef = useRef<number | null>(card.assignee.id); // post보낼 담당자 아이디
  const [asgineeName, setAsigneeName] = useState<string | undefined>(card.assignee.nickname);
  const [userProfile, setUserProfile] = useState<string | undefined>(card.assignee.profileImageUrl);
  const [selectedColumnName, setSelectedColumnName] = useState<string>(thisColumn.title);
  const [selectedColumnId, setSelectedColumnId] = useState<number>(thisColumn.id); // post보낼 칼럼 아이디
  const [isDropdownStatus, setIsDropdownStatus] = useState(false);
  const [isDropdownAsignee, setIsDropdownAsignee] = useState(false);
  const [filterdMember, SetFilterdMember] = useState<CardObjectType['memberData']>(memberData);
  const [isLoading, setIsLoading] = useState(false);
  const [editCardData, setEditCardData] = useState<Type>({
    title: card.title,
    description: card.description,
    dueDate: card.dueDate,
  });

  const handleCloseEditCardModal = () => {
    dispatch(closeModal());
    console.log(card);
    console.log(columns);
    console.log(thisColumn);
    console.log(memberData);
    console.log(selectedColumnId);
  };

  const handleSubmitEditCardModal = () => {
    try {
      setIsLoading(true);
      alert('수정완료');
      dispatch(closeModal());
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusDropdown = () => {
    setIsDropdownStatus((current) => !current);
  };

  const handleAsigneeDropdown = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value || document.activeElement === e.target) {
      setIsDropdownAsignee(true);
      setAsigneeName(e.target.value);
      setUserProfile(undefined);
    }
  };

  const handleSelectColumn = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const newColumnName = target.innerText;
    setSelectedColumnName(newColumnName);
    const newColumnId = columns.find((column) => column.title === selectedColumnName)?.id;
    if (newColumnId !== undefined) setSelectedColumnId(newColumnId);
    setIsDropdownStatus(false);
  };

  const handleClickedMember = (member: dashboardIdTypes['Members']) => {
    // 현재 선택되어있는 담당자 핸들링
    setIsDropdownAsignee(false);
    setUserProfile(member.profileImageUrl);
    setAsigneeName(member.nickname);
    asigneeRef.current = member.userId;
  };

  useEffect(() => {
    if (asgineeName !== '') {
      const data = [...memberData];
      const filterdData = data.filter((member) => {
        return member.nickname.includes(asgineeName as string);
      });
      SetFilterdMember(filterdData);
    } else if (asgineeName === '') {
      SetFilterdMember(memberData);
    }
  }, [asgineeName]);

  return (
    <ModalContainer
      title='할 일 수정'
      closeButtonName='취소'
      submitButtonName='수정'
      modalWidth={506}
      handleCloseModal={handleCloseEditCardModal}
      handleSubmitModal={handleSubmitEditCardModal}
    >
      {isLoading && <LoadingSpinner />}
      <StEditCard
        $Image={card.imageUrl}
        $isStatusClicked={isDropdownStatus}
        $isAsigneeClicked={isDropdownAsignee}
        $Profile={userProfile}
      >
        <div className='auth-box'>
          <div className='auth-box-first-div'>
            <h3>상태</h3>
            <div className='input-box status-box' onClick={handleStatusDropdown}>
              <ColumnNameTag name={selectedColumnName} />
            </div>
            <div className='input-box status-list'>
              {isDropdownStatus &&
                columns.map((column) => (
                  <div key={column.id}>
                    {selectedColumnName === column.title && (
                      <img src='/assets/image/icons/checkIcon.svg' alt='check-icon' />
                    )}
                    <ColumnNameTag name={column.title} onClick={(e) => handleSelectColumn(e)} />
                  </div>
                ))}
            </div>
          </div>
          <div className='auth-box-second-div'>
            <h3>담당자</h3>
            <input
              value={asgineeName}
              className='input-box asignee-box'
              type='text'
              onChange={(e) => handleAsigneeDropdown(e)}
              onFocus={(e) => handleAsigneeDropdown(e)}
              onBlur={() => setIsDropdownAsignee(false)}
            />
            {userProfile && <img src={userProfile} className='user-image in-searchbar' />}
            <div className='input-box member-list'>
              {isDropdownAsignee &&
                filterdMember.map((member) => (
                  <div
                    key={member.id}
                    className={`member ${asigneeRef.current === member.userId ? 'clicked' : ''}`}
                    onMouseDown={() => {
                      handleClickedMember(member);
                    }}
                  >
                    <img
                      src={member.profileImageUrl ? member.profileImageUrl : '/assets/image/icons/bannerLogoIconXL.svg'}
                      alt='profile-image'
                      className='user-image'
                    />
                    <span className='user-name'>{member.nickname}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div>
          <h3>
            제목<span className='essential'> *</span>
          </h3>
          <input
            className='input-box'
            type='text'
            value={editCardData.title}
            onChange={(e) => setEditCardData({ ...editCardData, title: e.target.value })}
          />
        </div>
        <div>
          <h3>
            설명<span className='essential'> *</span>
          </h3>
          <textarea
            className='input-box'
            value={editCardData.description}
            onChange={(e) => setEditCardData({ ...editCardData, description: e.target.value })}
          />
        </div>
        <div>
          <h3>마감일</h3>
          <Flatpickr
            className='input-box date-box'
            placeholder='날짜를 입력해 주세요'
            value={String(editCardData.dueDate)}
            options={{
              enableTime: true,
              minDate: dateExtractor(today).slice(0, 10),
              closeOnSelect: true,
            }}
            onChange={(e) => setEditCardData({ ...editCardData, dueDate: dateExtractor(e[0]) })}
          />
        </div>
        <div>
          <h3>태그</h3>
          <input className='input-box' type='text' />
        </div>
        <div>
          <h3>이미지</h3>
          <div className='upload-button-box'>
            <label htmlFor='upload-button'>
              {card.imageUrl && (
                <img className='pencil-icon' src='/assets/image/icons/pencilIcon.svg' alt='edit-icon' />
              )}
            </label>
            <input type='file' accept='image/*' className='upload-button' id='upload-button' />
          </div>
        </div>
      </StEditCard>
    </ModalContainer>
  );
};

export default EditCard;
