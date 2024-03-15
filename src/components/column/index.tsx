import { AppDispatch, fetchMyInfo, getMyInfo } from '@/redux/myInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ColumnContainer, ModalContent } from './style';
import { Columns } from '@/pages/dashboard-id';
import axiosInstance from '@/api/instance/axiosInstance';
import API from '@/api/constants';
import { ChangeEvent, useEffect, useState } from 'react';
import { RootState, closeModal, openModal, setOpenModalName } from '@/redux/modalSlice';
import ModalContainer from '../modal-container';
import LoadingSpinner from '@/components/loading-spinner';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

interface Props {
  props: Columns;
  viewColumns: () => void;
  dashboardId: string | undefined;
}

type CreateCardData = {
  title: string | undefined;
  description: string | undefined;
  dueDate: string | undefined;
};

type CardInfo = {
  cards: unknown;
  totalCount: number;
  cursorId: null;
};
const Column = ({ props, viewColumns, dashboardId }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const myData = useSelector(getMyInfo);
  const [cardInfo, setCardInfo] = useState<CardInfo | undefined>();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [createCardData, setCreateCardData] = useState<CreateCardData>({
    title: undefined,
    description: undefined,
    dueDate: undefined,
  });

  const openModalName = useSelector((state: RootState) => state.modal.openModalName);

  flatpickr('.date-box', {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
  });

  const handleCreateCard = () => {
    dispatch(setOpenModalName(`createcard${props.id}`));
    dispatch(openModal(`createcard${props.id}`));
  };

  const handleCloseCreateCard = () => {
    dispatch(closeModal());
    setUploadedFile(null);
    setPreviewUrl(null);
  };

  const handleSubmitCreateCard = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('image', uploadedFile as Blob);
      const res = await axiosInstance.post(`${API.COLUMNS.COLUMNS}/${props.id}/card-image`, formData);
      console.log(res.data.profileImageUrl);

      await axiosInstance.post(API.CARDS.CARDS, {
        assigneeUserId: myData.id,
        dashboardId: Number(dashboardId),
        columnId: props.id,
        title: createCardData.title,
        description: createCardData.description,
        dueDate: createCardData.dueDate,
        tags: ['태그1', '태그2', '태그3'],
        imageUrl: res.data.profileImageUrl,
      });

      alert('카드생성 완료');
      setCreateCardData({ title: undefined, description: undefined, dueDate: undefined });
      dispatch(closeModal());
      viewCards();
    } catch (err) {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const flatpickrGenerator = () => {
    setTimeout(() => {
      flatpickr('.date-box', {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
      });
    }, 0);
  };

  const viewCards = () => {
    axiosInstance.get(`${API.CARDS.CARDS}?size=10&columnId=${props.id}`).then((res) => {
      setCardInfo(res.data);
    });
  };

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        alert('파일은 이미지 형식만 첨부 가능합니다.');
      } else {
        setUploadedFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const removeColumn = () => {
    // 컬럼 삭제 임시 함수
    const isConfirmed = confirm('삭제?');
    if (isConfirmed) {
      axiosInstance.delete(`${API.COLUMNS.COLUMNS}/${props.id}`).then(() => viewColumns());
    }
  };

  useEffect(() => {
    viewCards();
    dispatch(fetchMyInfo());
  }, [dispatch]);

  return (
    <ColumnContainer>
      <div className='column-header'>
        <div className='column-color' />
        <h2>{props.title}</h2>
        <div className='inner-cards'>{cardInfo?.totalCount}</div>
        <img src='/assets/image/icons/settingIcon.svg' alt='setting-icon' onClick={removeColumn} />
      </div>

      <div className='column-body'>
        <button
          type='button'
          className='add-card'
          onClick={() => {
            flatpickrGenerator();
            handleCreateCard();
          }}
        >
          <img src='/assets/image/icons/bannerAddIcon.svg' alt='add-icon' />
        </button>
      </div>
      {openModalName === `createcard${props.id}` ? (
        <ModalContainer
          title='할 일 생성'
          closeButtonName='취소'
          submitButtonName='생성'
          modalWidth={506}
          handleCloseModal={handleCloseCreateCard}
          handleSubmitModal={handleSubmitCreateCard}
        >
          <ModalContent Image={previewUrl}>
            {isLoading && <LoadingSpinner />}

            <div>
              <h3>담당자</h3>
              <div className='input-box asignee-box'>
                <span className='asignee'>이름을 입력해주세요</span>
              </div>
            </div>
            <div>
              <h3>
                제목<span> *</span>
              </h3>
              <input
                className='input-box'
                placeholder='제목을 입력해 주세요'
                type='text'
                value={createCardData.title}
                onChange={(e) => setCreateCardData({ ...createCardData, title: e.target.value })}
              />
            </div>
            <div>
              <h3>
                설명<span> *</span>
              </h3>
              <textarea
                className='input-box description-box'
                placeholder='설명을 입력해 주세요'
                value={createCardData.description}
                onChange={(e) => setCreateCardData({ ...createCardData, description: e.target.value })}
              />
            </div>
            <div>
              <h3>마감일</h3>
              <input
                className='input-box date-box'
                placeholder='날짜를 입력해 주세요'
                type='text'
                value={createCardData.dueDate}
                onChange={(e) => console.log(e)}
              />
            </div>
            <div>
              <h3>태그</h3>
              <input className='input-box' placeholder='입력 후 Enter' type='text' />
            </div>
            <div>
              <h3>이미지</h3>
              <div className='add-image'>
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
    </ColumnContainer>
  );
};

export default Column;
