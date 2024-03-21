import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/redux/modalSlice';
import { dashboardIdTypes } from '@/types/dashboardIdTypes';
import { Types } from '@/types/columnDetailTypes';
import { makeRandomBackgroundColor } from '@/utils/makeRandomBackgroundColor';
import { postCreateCard } from '@/api/postCreateCard';
import { toast } from 'react-toastify';
import axiosInstance from '@/api/instance/axiosInstance';
import API from '@/api/constants';
import ModalContainer from '@/components/modal-container';
import StCreateCard from './style';
import TagComponent from '@/components/tag-component';
import LoadingSpinner from '@/components/loading-spinner';
import dateExtractor from '@/utils/dateExtractor';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

interface Props {
  columnData: dashboardIdTypes['Columns'];
  memberData: dashboardIdTypes['Members'][];
  dashboardId: string | undefined;
  viewCards: () => void;
}

const CreateCard = ({ memberData, columnData, dashboardId, viewCards }: Props) => {
  const dispatch = useDispatch();
  const today = new Date();
  const imgRef = useRef<HTMLImageElement>(null!);
  const assigneeRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [userProfile, setUserProfile] = useState<string | undefined>('');
  const [filterdMember, SetFilterdMember] = useState<dashboardIdTypes['Members'][]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [cardData, setCardData] = useState<Types['CreateCardData']>({
    asignee: '',
    title: '',
    description: '',
    dueDate: '',
    tag: '',
  });

  const handleCloseCreateCardModal = () => {
    dispatch(closeModal());
  };

  const handleSubmitCreateCardModal = async () => {
    try {
      setIsLoading(true);
      if (!cardData.title || !cardData.description) {
        toast.error('제목,설명은 필수입니다.');
        return;
      }
      await postCreateCard(
        assigneeRef.current ? assigneeRef.current : undefined,
        Number(dashboardId),
        columnData.id,
        cardData.title,
        cardData.description,
        cardData.dueDate ? cardData.dueDate : undefined,
        tags.map((item) => item),
        imageUrl ? imageUrl : undefined,
      );

      toast.success('생성 성공');
      dispatch(closeModal());
    } catch (err) {
      alert(`오류가 발생했습니다.(${err})`);
    } finally {
      setIsLoading(false);
      viewCards();
    }
  };

  const handleDropdown = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value || document.activeElement === e.target) {
      setCardData({ ...cardData, asignee: e.target.value });
      setIsDropdown(true);
      setUserProfile(undefined);
    } else {
      setIsDropdown(false);
    }
  };

  const handleClickedMember = (member: dashboardIdTypes['Members']) => {
    setCardData({ ...cardData, asignee: member.nickname });
    setIsDropdown(false);
    setUserProfile(member.profileImageUrl);
    assigneeRef.current = member.userId;
    if (inputRef.current) {
      inputRef.current.value = member.nickname;
    }
  };

  const handleCreateTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.nativeEvent.isComposing) return;
      const input = cardData.tag;
      setTags((prev) => [...prev, input]);
      setCardData({ ...cardData, tag: '' });
    }
  };

  const handleRemoveTag = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const removeTag = target.innerText;
    setTags(tags.filter((item) => item !== removeTag));
  };

  const handleUploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/') || file.type === 'image/gif') {
        toast.warning('파일은 gif를 제외한 이미지 타입만 첨부 가능합니다.');
      } else {
        setUploadedFile(file);
        const formData = new FormData();
        formData.append('image', file as Blob);
        await axiosInstance
          .post(`${API.COLUMNS.COLUMNS}/${columnData.id}/card-image`, formData)
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
    assigneeRef.current = null;
    setCardData({ ...cardData, asignee: '' });
    setUserProfile('');
  };

  useEffect(() => {
    viewCards();
    if (memberData.length > 0) {
      // 멤버 목록을 받아왔을때 프로필이 null이면 기본값으로 변경
      memberData.forEach((member) => {
        member.profileImageUrl = member.profileImageUrl
          ? member.profileImageUrl
          : '/assets/image/icons/bannerLogoIconXL.svg';
      });
    }
  }, [memberData]);

  useEffect(() => {
    // 입력값이 변할때마다 검색결과 재적용
    if (cardData.asignee !== '') {
      const data = [...memberData];
      const filterdData = data.filter((member) => {
        return member.nickname.includes(cardData.asignee);
      });
      SetFilterdMember(filterdData);
    } else if (cardData.asignee === '') {
      SetFilterdMember(memberData);
    }
    console.log(filterdMember);
  }, [cardData]);

  return (
    <ModalContainer
      title='할 일 생성'
      closeButtonName='취소'
      submitButtonName='생성'
      modalWidth={506}
      handleCloseModal={handleCloseCreateCardModal}
      handleSubmitModal={handleSubmitCreateCardModal}
    >
      <StCreateCard $Profile={userProfile} $IsDropdown={isDropdown} $Tag={tags} $Preview={previewUrl}>
        {isLoading && <LoadingSpinner />}
        <div className='section-div first-div'>
          <h3 onClick={handleAssigneeClear}>담당자</h3>
          <img
            src='/assets/image/icons/removeIcon.svg'
            className='remove-icon'
            alt='remove-icon'
            onClick={handleAssigneeClear}
          />
          <input
            value={cardData.asignee}
            className='input-box asignee-box'
            placeholder='이름을 입력해 주세요'
            type='text'
            ref={inputRef}
            onChange={(e) => handleDropdown(e)}
            onFocus={(e) => handleDropdown(e)}
            onBlur={() => setIsDropdown(false)}
          />
          {userProfile && <img src={userProfile} className='user-image in-searchbar' ref={imgRef} />}
          <div className='input-box member-list'>
            {isDropdown &&
              filterdMember.map((member) => (
                <div
                  key={member.id}
                  className={`member ${assigneeRef.current === member.userId ? 'clicked' : ''}`}
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
        <div className='section-div'>
          <h3>
            제목<span> *</span>
          </h3>
          <input
            className='input-box'
            placeholder='제목을 입력해 주세요'
            type='text'
            value={cardData.title}
            onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
          />
        </div>
        <div className='section-div'>
          <h3>
            설명<span> *</span>
          </h3>
          <textarea
            className='input-box description-box'
            placeholder='설명을 입력해 주세요'
            value={cardData.description}
            onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
          />
        </div>
        <div className='section-div'>
          <h3>마감일</h3>
          <Flatpickr
            className='input-box date-box'
            placeholder='날짜를 입력해 주세요'
            value={cardData.dueDate}
            options={{
              enableTime: true,
              minDate: dateExtractor(today).slice(0, 10),
              closeOnSelect: true,
            }}
            onChange={(e) => setCardData({ ...cardData, dueDate: dateExtractor(e[0]) })}
          />
        </div>
        <div className='section-div'>
          <h3>태그</h3>
          <input
            className='input-box tag-input'
            placeholder='입력 후 Enter'
            type='text'
            value={cardData.tag}
            onKeyDown={(e) => handleCreateTag(e)}
            onChange={(e) => setCardData({ ...cardData, tag: e.target.value })}
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
        <div className='section-div'>
          <h3>이미지</h3>
          <div className='upload-button-box'>
            <label htmlFor='upload-button' />
            <input
              type='file'
              accept='image/*'
              className='upload-button'
              id='upload-button'
              onChange={handleUploadFile}
            />
          </div>
          <div className='file-name'>{uploadedFile ? uploadedFile.name : '선택한 파일이 없습니다.'} </div>
        </div>
      </StCreateCard>
    </ModalContainer>
  );
};

export default CreateCard;
