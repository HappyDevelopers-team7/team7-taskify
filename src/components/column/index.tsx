import { AppDispatch } from '@/redux/myInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ColumnContainer, ModalContent } from './style';
import { ChangeEvent, useEffect, useState, useRef, KeyboardEvent } from 'react';
import { ModalRootState, closeModal, openModal, setOpenModalName } from '@/redux/modalSlice';
import { toast } from 'react-toastify';
import { Types } from '@/types/columnDetailTypes';
import axiosInstance from '@/api/instance/axiosInstance';
import API from '@/api/constants';
import ModalContainer from '../modal-container';
import Card from '../card';
import LoadingSpinner from '@/components/loading-spinner';
import Flatpickr from 'react-flatpickr';
import EditColumnModal from '../modal-edit-column';
import dateExtractor from '@/utils/dateExtractor';
import TagComponent from '../tag-component';
import 'flatpickr/dist/flatpickr.min.css';
import { ColumnCardType } from '@/types/columnCardType';
import { dashboardIdTypes } from '@/types/dashboardIdTypes';

interface Props {
  columnData: dashboardIdTypes['Columns'];
  memberData: dashboardIdTypes['Members'][];
  viewColumns: () => void;
  dashboardId: string | undefined;
  columns: dashboardIdTypes['Columns'][];
}

const Column = ({ columnData, memberData, viewColumns, dashboardId, columns }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const today = new Date();
  const colorArray = ['#ff0000', '#29c936', '#ff8c00', '#000000', '#008000', '#f122f1', '#0000ff'];
  const openModalName = useSelector((state: ModalRootState) => state.modal.openModalName);
  const inputRef = useRef<HTMLInputElement>(null);
  const asigneeRef = useRef<number | null>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [cardInfo, setCardInfo] = useState<ColumnCardType[]>();
  const [totalCount, setTotalCount] = useState<Types['totalCount']>(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDropdownAsignee, setIsDropdownAsignee] = useState(false);
  const [filterdMember, SetFilterdMember] = useState<dashboardIdTypes['Members'][]>([]);
  const [userProfile, setUserProfile] = useState<string | undefined>('');
  const [tags, setTags] = useState<Types['Tag'][]>([]);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [pages, setPages] = useState<number>(3);
  const [createCardData, setCreateCardData] = useState<Types['CreateCardData']>({
    asignee: '',
    title: '',
    description: '',
    dueDate: '',
    tag: '',
  });
  const idGroup = {
    columnTitle: columnData.title,
    columnId: columnData.id,
    dashboardId: Number(dashboardId),
  };

  const handleOpenCreateCard = () => {
    dispatch(setOpenModalName(`createcard${columnData.id}`));
    dispatch(openModal(`createcard${columnData.id}`));
  };

  const handleCloseCreateCard = () => {
    dispatch(closeModal());
    setUploadedFile(null);
    setPreviewUrl(null);
    setUserProfile(undefined);
    setCreateCardData({ asignee: '', title: '', description: '', dueDate: '', tag: '' });
    setTags([]);
    asigneeRef.current = null;
  };

  const handleEditColumn = () => {
    setOpenModalName(`editcolumn${columnData.id}`);
    dispatch(openModal(`editcolumn${columnData.id}`));
    viewColumns();
  };

  const handleDeleteColumn = () => {
    const isConfirmed = confirm('컬럼의 모든 카드가 삭제됩니다.');
    if (isConfirmed) {
      axiosInstance.delete(`${API.COLUMNS.COLUMNS}/${columnData.id}`).then(() => viewColumns());
    }
  };

  const handleSubmitCreateCard = async () => {
    try {
      setIsLoading(true);
      if (!titleRef.current?.value || !descriptionRef.current?.value) {
        toast.error('제목,설명은 필수입니다.');
        return;
      }
      await axiosInstance.post(API.CARDS.CARDS, {
        assigneeUserId: asigneeRef.current ? asigneeRef.current : undefined,
        dashboardId: Number(dashboardId),
        columnId: columnData.id,
        title: createCardData.title,
        description: createCardData.description,
        dueDate: createCardData.dueDate ? createCardData.dueDate : undefined,
        tags: tags.map((item) => item.name),
        imageUrl: imageUrl ? imageUrl : undefined,
      });

      alert('카드생성 완료');
      setCreateCardData({ asignee: '', title: '', description: '', dueDate: '', tag: '' });
      setPreviewUrl(null);
      setUploadedFile(null);
      setUserProfile(undefined);
      setTags([]);
      dispatch(closeModal());
    } catch (err) {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
      viewCards();
    }
  };

  const viewCards = async () => {
    setIsLoading(true);
    await axiosInstance
      .get(`${API.CARDS.CARDS}?size=${pages}&columnId=${columnData.id}`)
      .then((res) => {
        setCardInfo(res.data.cards);
        setTotalCount(res.data.totalCount);
      })
      .catch(() => alert('카드 조회 실패'))
      .finally(() => setIsLoading(false));
  };

  const handleUploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    // 카드 이미지 첨부 & 미리보기 출력 함수
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/') || file.type === 'image/gif') {
        alert('파일은 gif를 제외한 이미지 타입만 첨부 가능합니다.');
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

  const asigneeDropdownChecker = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value || document.activeElement === e.target) {
      setCreateCardData({ ...createCardData, asignee: e.target.value });
      setIsDropdownAsignee(true);
      setUserProfile(undefined);
    } else {
      setIsDropdownAsignee(false);
    }
  };

  const handleClickedMember = (member: dashboardIdTypes['Members']) => {
    // 현재 선택되어있는 담당자 핸들링
    setCreateCardData({ ...createCardData, asignee: member.nickname });
    setIsDropdownAsignee(false);
    setUserProfile(member.profileImageUrl);
    asigneeRef.current = member.userId;
    if (inputRef.current) {
      inputRef.current.value = member.nickname;
    }
  };

  const handleCreateTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const input = createCardData.tag;
      const tag = {
        id: Date.now(),
        name: input,
      };
      setTags((prev) => [...prev, tag]);
      setCreateCardData({ ...createCardData, tag: '' });
    }
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
  }, [memberData, pages]);

  useEffect(() => {
    // 입력값이 변할때마다 검색결과 재적용
    if (createCardData.asignee !== '') {
      const data = [...memberData];
      const filterdData = data.filter((member) => {
        return member.nickname.includes(createCardData.asignee);
      });
      SetFilterdMember(filterdData);
    } else if (createCardData.asignee === '') {
      SetFilterdMember(memberData);
    }
  }, [createCardData]);

  return (
    <ColumnContainer>
      {isLoading && <LoadingSpinner />}
      <div className='column-head'>
        <div className='column-color' />
        <h2>{columnData.title}</h2>
        <div className='inner-cards'>{totalCount}</div>
        <img src='/assets/image/icons/settingIcon.svg' alt='setting-icon' onClick={handleEditColumn} />
      </div>

      <div className='column-body'>
        <button type='button' className='add-card' onClick={() => handleOpenCreateCard()}>
          <img src='/assets/image/icons/bannerAddIcon.svg' alt='add-icon' />
        </button>
        {cardInfo &&
          cardInfo.map((card) => (
            <Card
              key={card.id}
              card={card}
              idGroup={idGroup}
              cardList={cardInfo}
              setCardList={setCardInfo}
              thisColumn={columnData}
              columns={columns}
            />
          ))}
      </div>

      <div className='column-foot'>
        {totalCount > pages && (
          <button
            onClick={() => {
              setPages((prev) => prev + 3);
            }}
          >
            더보기
          </button>
        )}
      </div>

      {openModalName === `createcard${columnData.id}` ? (
        <ModalContainer
          title='할 일 생성'
          closeButtonName='취소'
          submitButtonName='생성'
          modalWidth={506}
          handleCloseModal={handleCloseCreateCard}
          handleSubmitModal={handleSubmitCreateCard}
        >
          <ModalContent $Image={previewUrl} $Text={isDropdownAsignee} $Profile={userProfile} $Tag={tags}>
            {isLoading && <LoadingSpinner />}

            <div className='first-div'>
              <h3>담당자</h3>
              <input
                className='input-box asignee-box'
                placeholder='이름을 입력해 주세요'
                type='text'
                ref={inputRef}
                onChange={(e) => asigneeDropdownChecker(e)}
                onFocus={(e) => asigneeDropdownChecker(e)}
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
                        src={
                          member.profileImageUrl ? member.profileImageUrl : '/assets/image/icons/bannerLogoIconXL.svg'
                        }
                        alt='profile-image'
                        className='user-image'
                      />
                      <span className='user-name'>{member.nickname}</span>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <h3>
                제목<span className='essential'> *</span>
              </h3>
              <input
                ref={titleRef}
                className='input-box'
                placeholder='제목을 입력해 주세요'
                type='text'
                value={createCardData.title}
                onChange={(e) => setCreateCardData({ ...createCardData, title: e.target.value })}
              />
            </div>
            <div>
              <h3>
                설명<span className='essential'> *</span>
              </h3>
              <textarea
                ref={descriptionRef}
                className='input-box description-box'
                placeholder='설명을 입력해 주세요'
                value={createCardData.description}
                onChange={(e) => setCreateCardData({ ...createCardData, description: e.target.value })}
              />
            </div>
            <div>
              <h3>마감일</h3>
              <Flatpickr
                className='input-box date-box'
                placeholder='날짜를 입력해 주세요'
                value={createCardData.dueDate}
                options={{
                  enableTime: true,
                  minDate: dateExtractor(today).slice(0, 10),
                  closeOnSelect: true,
                }}
                onChange={(e) => setCreateCardData({ ...createCardData, dueDate: dateExtractor(e[0]) })}
              />
            </div>
            <div>
              <h3>태그</h3>
              <input
                value={createCardData.tag}
                className='input-box tag-input'
                placeholder='입력 후 Enter'
                type='text'
                onKeyDown={(e) => handleCreateTag(e)}
                onChange={(e) => setCreateCardData({ ...createCardData, tag: e.target.value })}
              />
              <div className='input-box tag-list'>
                {tags &&
                  tags.map((tag, index) => (
                    <TagComponent
                      key={tag.id}
                      name={tag.name}
                      backgroundColor={colorArray[index % colorArray.length]}
                    />
                  ))}
              </div>
            </div>
            <div>
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
          </ModalContent>
        </ModalContainer>
      ) : null}

      {openModalName === `editcolumn${columnData.id}` && (
        <EditColumnModal
          columnId={columnData.id}
          columnName={columnData.title}
          handleEditColumn={handleEditColumn}
          handleDeleteColumn={handleDeleteColumn}
        />
      )}
    </ColumnContainer>
  );
};

export default Column;
