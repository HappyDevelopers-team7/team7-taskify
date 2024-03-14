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
const Column = ({ props, viewColumns, dashboardId }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const myData = useSelector(getMyInfo);
  const [cardInfo, setCardInfo] = useState([]);
  const openModalName = useSelector((state: RootState) => state.modal.openModalName);
  flatpickr('.date-box', {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
  });
  const handleCreateCard = () => {
    dispatch(setOpenModalName('createCard'));
    dispatch(openModal('createCard'));
  };

  const handleCloseCreateCard = () => {
    dispatch(closeModal());
  };

  const handleSubmitCreateCard = () => {
    dispatch(closeModal());
    alert('생성완료 (사실 테스트라서 생성 안됐음)');
  };

  const flatpickrGenerator = () => {
    setTimeout(() => {
      flatpickr('.date-box', {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
      });
    }, 0);
  };

  const removeColumn = () => {
    // 컬럼 삭제 임시 함수
    const isConfirmed = confirm('삭제?');
    if (isConfirmed) {
      axiosInstance.delete(`${API.COLUMNS.COLUMNS}/${props.id}`).then(() => viewColumns());
    }
  };

  const viewCards = () => {
    axiosInstance.get(`${API.CARDS.CARDS}?size=10&columnId=${props.id}`).then((res) => {
      setCardInfo(res.data);
    });
  };

  // const createCard = () => {
  //   // 카드 생성 임시 함수

  //   axiosInstance
  //     .post(API.CARDS.CARDS, {
  //       assigneeUserId: myData.id,
  //       dashboardId: Number(dashboardId),
  //       columnId: props.id,
  //       title: '카드1',
  //       description: '카드 생성 테스트',
  //       dueDate: '2024-09-12 00:00',
  //       tags: ['태그1', '태그2', '태그3'],
  //       imageUrl:
  //         'https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     })
  //     .then(() => alert('카드생성 완료'))
  //     .then(() => viewCards());
  // };

  useEffect(() => {
    viewCards();
    dispatch(fetchMyInfo());
  }, [dispatch]);

  const t = (e: React.KeyboardEvent) => {
    // 린트오류때문에 커밋이 안돼서 임시로 만든 함수입니다 다음 PR때 지우겠습니다
    if (e.eventPhase === 999) {
      console.log(myData);
      console.log(cardInfo);
      console.log(dashboardId);
    }
  };

  return (
    <ColumnContainer>
      <div className='column-header' onKeyDown={t}>
        <div className='column-color' />
        <h2>{props.title}</h2>
        <div className='inner-cards'>3</div>
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
      {openModalName === 'createCard' ? (
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
              <div className='input-box'>
                <span className='asignee'>이름을 입력해주세요</span>
              </div>
            </div>
            <div>
              <h3>
                제목<span> *</span>
              </h3>
              <input className='input-box' placeholder='제목을 입력해 주세요' type='text' />
            </div>
            <div>
              <h3>
                설명<span> *</span>
              </h3>
              <textarea className='input-box' placeholder='설명을 입력해 주세요' />
            </div>
            <div>
              <h3>마감일</h3>
              <input className='input-box date-box' placeholder='날짜를 입력해 주세요' type='text' />
            </div>
            <div>
              <h3>태그</h3>
              <input className='input-box' placeholder='입력 후 Enter' type='text' />
            </div>
            <div>
              <h3>이미지</h3>
              <button type='button' className='add-image'>
                <img src='/assets/image/icons/modalAddIcon.svg' alt='add-icon' />
              </button>
            </div>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </ColumnContainer>
  );
};

export default Column;
