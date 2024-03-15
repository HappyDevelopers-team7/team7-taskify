import { AppDispatch, fetchMyInfo, getMyInfo } from '@/redux/myInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ColumnContainer, ModalContent } from './style';
import { Columns } from '@/pages/dashboard-id';
import axiosInstance from '@/api/instance/axiosInstance';
import API from '@/api/constants';
import { useEffect, useState } from 'react';
import { RootState, closeModal, openModal, setOpenModalName } from '@/redux/modalSlice';
import ModalContainer from '../modal-container';
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
  const [card, setCard] = useState<CreateCardData>({
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
  };

  const handleSubmitCreateCard = () => {
    dispatch(closeModal());
    axiosInstance
      .post(API.CARDS.CARDS, {
        assigneeUserId: myData.id,
        dashboardId: Number(dashboardId),
        columnId: props.id,
        title: card.title,
        description: card.description,
        dueDate: card.dueDate,
        tags: ['태그1', '태그2', '태그3'],
        imageUrl:
          'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/task_image/3-7_15956_1710405778011.png',
      })
      .then(() => alert('카드생성 완료'))
      .then(() => {
        viewCards();
      })
      .catch(() => {});
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

  const removeColumn = () => {
    // 컬럼 삭제 임시 함수
    const isConfirmed = confirm('삭제?');
    if (isConfirmed) {
      axiosInstance.delete(`${API.COLUMNS.COLUMNS}/${props.id}`).then(() => viewColumns());
    }
  };

  // const handleUploadFile = () => {
  //   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     const files = e.target.files;
  //     if (files && files.length > 0) setUploadedFile(files[0]);
  //   };

  //   const fileInput = document.createElement('input');
  //   fileInput.type = 'file';
  //   fileInput.style.display = 'none';
  //   fileInput.addEventListener('change', handleFileChange);
  //   document.body.appendChild(fileInput);
  //   fileInput.click();
  // };

  // const handleUploadFile = () => {
  //   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     const files = e.target.files;
  //     if (files && files.length > 0) setUploadedFile(files[0]);
  //   };

  //   const fileInput = document.createElement('input');
  //   fileInput.type = 'file';
  //   fileInput.style.display = 'none';
  //   fileInput.addEventListener('change', (e: ChangeEvent<HTMLInputElement>) => handleFileChange(e));
  //   document.body.appendChild(fileInput);
  //   fileInput.click();
  // };

  useEffect(() => {
    viewCards();
    dispatch(fetchMyInfo());
    //console.log(myData);
    console.log(cardInfo);
    //console.log(dashboardId);
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
          <ModalContent>
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
                value={card.title}
                onChange={(e) => setCard({ ...card, title: e.target.value })}
              />
            </div>
            <div>
              <h3>
                설명<span> *</span>
              </h3>
              <textarea
                className='input-box description-box'
                placeholder='설명을 입력해 주세요'
                value={card.description}
                onChange={(e) => setCard({ ...card, description: e.target.value })}
              />
            </div>
            <div>
              <h3>마감일</h3>
              <input
                className='input-box date-box'
                placeholder='날짜를 입력해 주세요'
                type='text'
                value={card.dueDate}
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
                <img src='/assets/image/icons/modalAddIcon.svg' alt='add-icon' />
                <input type='file' />
              </div>
              <div className='file-name'>{uploadedFile && uploadedFile.name}</div>
            </div>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </ColumnContainer>
  );
};

export default Column;
