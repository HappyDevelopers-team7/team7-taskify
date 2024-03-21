import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { makeRandomBackgroundColor } from '@/utils/makeRandomBackgroundColor';
import { ChangeEvent, MouseEvent, KeyboardEvent, useEffect, useState, useRef } from 'react';
import { closeModal } from '@/redux/modalSlice';
import { CardObjectType } from '@/types/cardObjectType';
import { dashboardIdTypes } from '@/types/dashboardIdTypes';
import StEditCard from './style';
import ModalContainer from '@/components/modal-container';
import ColumnNameTag from '@/components/column-name-tag';
import LoadingSpinner from '@/components/loading-spinner';
import dateExtractor from '@/utils/dateExtractor';
import TagComponent from '@/components/tag-component';
import axiosInstance from '@/api/instance/axiosInstance';
import API from '@/api/constants';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

type Type = {
  title: string;
  description: string;
  dueDate: string | null;
  tag: string;
};

const EditCard = ({ card, thisColumn, columns, memberData, viewCards }: CardObjectType) => {
  const dispatch = useDispatch();
  const today = new Date();
  const asigneeRef = useRef<number | null>(card.assignee?.id || null);
  const imgRef = useRef<HTMLImageElement>(null!);
  const divRef = useRef<HTMLDivElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(card.imageUrl);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>(card.tags);
  const [asgineeName, setAsigneeName] = useState<string | undefined>(card.assignee?.nickname || '');
  const [userProfile, setUserProfile] = useState<string | undefined>(card.assignee?.profileImageUrl || '');
  const [selectedColumnName, setSelectedColumnName] = useState<string>(thisColumn.title);
  const [selectedColumnId, setSelectedColumnId] = useState<number>(thisColumn.id);
  const [isDropdownStatus, setIsDropdownStatus] = useState(false);
  const [isDropdownAsignee, setIsDropdownAsignee] = useState(false);
  const [filterdMember, SetFilterdMember] = useState<CardObjectType['memberData']>(memberData);
  const [isLoading, setIsLoading] = useState(false);
  const [editCardData, setEditCardData] = useState<Type>({
    title: card.title,
    description: card.description,
    dueDate: card.dueDate,
    tag: '',
  });

  const handleCloseEditCardModal = () => {
    dispatch(closeModal());
  };

  const handleSubmitEditCardModal = async () => {
    try {
      setIsLoading(true);
      if (!editCardData.title || !editCardData.description) {
        toast.error('제목,설명은 필수입니다.');
        return;
      }
      await axiosInstance.put(`${API.CARDS.CARDS}/${card.id}`, {
        columnId: selectedColumnId,
        assigneeUserId: asigneeRef ? asigneeRef.current : undefined,
        title: editCardData.title,
        description: editCardData.description,
        dueDate: editCardData.dueDate ? editCardData.dueDate : undefined,
        tags: tags,
        imageUrl: imageUrl ? imageUrl : undefined,
      });

      toast.success('수정완료');
      dispatch(closeModal());
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
      viewCards();
      window.location.reload();
    }
  };

  const handleStatusDropdown = () => {
    setIsDropdownStatus((current) => !current);
    const div = divRef.current;
    if (!isDropdownStatus) {
      div?.classList.add('focused');
    }
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
    const div = divRef.current;
    setSelectedColumnName(newColumnName);
    const newColumnId = columns.find((column) => column.title === newColumnName)?.id;
    if (newColumnId !== undefined) setSelectedColumnId(newColumnId);
    setIsDropdownStatus(false);
    div?.classList.remove('focused');
  };

  const handleClickedMember = (member: dashboardIdTypes['Members']) => {
    // 현재 선택되어있는 담당자 핸들링
    setIsDropdownAsignee(false);
    setUserProfile(member.profileImageUrl);
    setAsigneeName(member.nickname);
    asigneeRef.current = member.userId;
  };

  const handleCreateTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const input = editCardData.tag;
      setTags((prev) => [...prev, input]);
      setEditCardData({ ...editCardData, tag: '' });
    }
  };

  const handleRemoveTag = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const removeTag = target.innerText;
    setTags(tags.filter((item) => item !== removeTag));
  };

  const handleUploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    // 카드 이미지 첨부 & 미리보기 출력 함수
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/') || file.type === 'image/gif') {
        toast.warning('파일은 gif를 제외한 이미지 타입만 첨부 가능합니다.');
      } else {
        setUploadedFile(file);
        const formData = new FormData();
        formData.append('image', file as Blob);
        await axiosInstance
          .post(`${API.COLUMNS.COLUMNS}/${selectedColumnId}/card-image`, formData)
          .then((res) => setImageUrl(res.data.imageUrl));
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleAssigneeClear = () => {
    const img = imgRef.current;
    if (img) img.classList.add('hidden');
    asigneeRef.current = null;
    setAsigneeName('');
    setUserProfile('');
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
        $Tag={tags}
        $NewImage={previewUrl}
      >
        <div className='auth-box'>
          <div className='auth-box-first-div'>
            <h3>상태</h3>
            <div className='input-box status-box' onClick={handleStatusDropdown} ref={divRef}>
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
            <img
              src='/assets/image/icons/removeIcon.svg'
              className='remove-icon'
              alt='remove-icon'
              onClick={handleAssigneeClear}
            />
            <input
              value={asgineeName}
              placeholder='담당자 선택'
              className='input-box asignee-box'
              type='text'
              onChange={(e) => handleAsigneeDropdown(e)}
              onFocus={(e) => handleAsigneeDropdown(e)}
              onBlur={() => setIsDropdownAsignee(false)}
            />
            {userProfile && <img src={userProfile} className='user-image in-searchbar' ref={imgRef} />}
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
          <input
            className='input-box tag-input'
            placeholder='입력 후 Enter'
            type='text'
            value={editCardData.tag}
            onChange={(e) => setEditCardData({ ...editCardData, tag: e.target.value })}
            onKeyDown={(e) => handleCreateTag(e)}
          />
          <div className='input-box tag-list'>
            {tags &&
              tags.map((tag, index) => (
                <TagComponent
                  key={index}
                  name={tag}
                  backgroundColor={makeRandomBackgroundColor(index)}
                  onClick={(e) => handleRemoveTag(e)}
                />
              ))}
          </div>
        </div>
        <div>
          <h3>이미지</h3>
          <div className='upload-button-box'>
            <label htmlFor='upload-button'>
              {card.imageUrl && !previewUrl ? (
                <img className='pencil-icon' src='/assets/image/icons/pencilIcon.svg' alt='edit-icon' />
              ) : null}
            </label>
            <input
              type='file'
              accept='image/*'
              className='upload-button'
              id='upload-button'
              onChange={handleUploadFile}
            />
          </div>
          <div className='file-name'>{uploadedFile ? uploadedFile.name : '수정할 이미지를 첨부해주세요.'} </div>
        </div>
      </StEditCard>
    </ModalContainer>
  );
};

export default EditCard;
