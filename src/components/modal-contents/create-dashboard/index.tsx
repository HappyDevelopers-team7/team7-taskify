import InputText from '@/components/input/input-text';
import ModalContainer from '@/components/modal-container';
import { DASHBOARD_MESSAGES, INPUT_ERROR_MESSAGES } from '@/constants/message';
import { closeModal } from '@/redux/modalSlice';
import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChromePicker, ColorResult } from 'react-color';
import StCreateDashboard from './style';
import InputColorPicker from '@/components/input/input-color-picker';
import { postCreateDashboard } from '@/api/postCreateDashboard';
import { toast } from 'react-toastify';

const CreateDashboard = () => {
  const dispatch = useDispatch();
  const [dashboardNameInputValue, setDashboardNameInputValue] = useState('');
  const [dashboardColorValue, setDashboardColorValue] = useState('');
  const [isShow, setIsShow] = useState(false);

  const handleCloseCreateDashboardModal = () => {
    dispatch(closeModal());
  };

  const handleSubmitCreateDashboardModal = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (dashboardNameInputValue && dashboardColorValue) {
      const result = await postCreateDashboard(dashboardNameInputValue, dashboardColorValue);
      if (result && result.status === 201) {
        toast.success(DASHBOARD_MESSAGES.CREATE_DASHBOARD); // 대시보드 생성 성공!
      }
      dispatch(closeModal());
      setDashboardNameInputValue('');
      setDashboardColorValue('');
    } else {
      alert(INPUT_ERROR_MESSAGES.PLEASE_ENTER_VALUE);
    }
  };

  const handleShowColorPicker = () => {
    setIsShow((prev) => !prev);
  };

  const handleChangeColor = (color: ColorResult) => {
    const newColorValue = color.hex;
    setDashboardColorValue(newColorValue);
  };

  return (
    <ModalContainer
      title='대시보드 생성'
      closeButtonName='취소'
      submitButtonName='생성'
      modalWidth={506}
      handleCloseModal={handleCloseCreateDashboardModal}
      handleSubmitModal={handleSubmitCreateDashboardModal}
    >
      <StCreateDashboard>
        <form onSubmit={handleSubmitCreateDashboardModal}>
          <InputText
            setValue={setDashboardNameInputValue}
            autoFocus={true}
            required
            labelName='대시보드 이름'
            placeholder='대시보드 이름을 입력하세요.'
          />
          <div className='input-colorpicker__group'>
            <div className='' onClick={handleShowColorPicker}>
              <InputColorPicker
                value={dashboardColorValue}
                required
                readonly
                imgAlt='색상 선택 아이콘'
                imgUrl='/assets/image/icons/brushIcon.svg'
                labelName='대시보드 색상'
                placeholder='여기를 클릭해서 색상을 지정해주세요.'
              />
            </div>
            <div className='color-picker-box'>
              {isShow ? <ChromePicker color={dashboardColorValue} onChangeComplete={handleChangeColor} /> : null}
            </div>
          </div>
        </form>
      </StCreateDashboard>
    </ModalContainer>
  );
};

export default CreateDashboard;
