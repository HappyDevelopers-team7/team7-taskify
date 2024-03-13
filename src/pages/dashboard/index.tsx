import MyDashBoardList from '@/components/my-dashboard-list';
import StDashBoardWrap from './style';
import ModalContainer from '@/components/modal-container';
import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '@/redux/modalSlice';
import { useState } from 'react';

const DashBoard = () => {
  const dispatch = useDispatch();
  const [modalName, setModalName] = useState<string>(''); // 모달의 이름을 관리한다.

  const handleOpenCreateDashboardModal = () => {
    // 대시보드 생성 모달을 열어준다.
    setModalName('createDashboard');
    dispatch(openModal(modalName));
  };
  const handleCloseCreateDashboardModal = () => {
    // 대시보드 생성 모달을 닫아준다.
    setModalName('');
    dispatch(closeModal());
  };
  const handleSubmitCreateDashboardModal = () => {
    // 대시보드 생성 submit 동작을 넣어준다.
  };

  // 모달 하나 이상 열때 아래와 같이 반복
  const handleOpenTestModal = () => {
    setModalName('testModal');
    dispatch(openModal(modalName));
  };

  const handleCloseTestModal = () => {
    setModalName('');
    dispatch(closeModal());
  };
  return (
    <>
      <StDashBoardWrap>
        <MyDashBoardList handleCreateDashboard={handleOpenCreateDashboardModal} />
        <button onClick={handleOpenTestModal} type='button'>
          테스트 모달 열기
        </button>
      </StDashBoardWrap>
      {modalName === 'createDashboard' ? (
        // state에 저장되어있는 modal 이름과 createDashboard이 같다면 보여주고 아니면 닫아라.
        <ModalContainer
          title='대시보드 생성'
          closeButtonName='취소'
          submitButtonName='생성'
          modalWidth={506}
          handleCloseModal={handleCloseCreateDashboardModal}
          handleSubmitModal={handleSubmitCreateDashboardModal}
        >
          <div>여기에 모달 컴포넌트를 넣어주세요</div>
        </ModalContainer>
      ) : null}
      {modalName === 'testModal' ? (
        <ModalContainer
          title='테스트 모달'
          closeButtonName='취소'
          submitButtonName='확인'
          modalWidth={720}
          handleCloseModal={handleCloseTestModal}
          handleSubmitModal={handleSubmitCreateDashboardModal}
        >
          <div>여기에 모달 컴포넌트를 넣어주세요</div>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default DashBoard;
