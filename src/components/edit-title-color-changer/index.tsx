import { SyntheticEvent, useState, useEffect } from 'react';
import InputText from '@/components/input/input-text';
import InputColorPicker from '@/components/input/input-color-picker';
import { ChromePicker, ColorResult } from 'react-color';
import { toast } from 'react-toastify';
import { putDashboardChange } from '@/api/putDashboardChange';
import { DASHBOARD_MESSAGES, INPUT_ERROR_MESSAGES } from '@/constants/message';
import { useParams } from 'react-router-dom';
import { getDashboardInfo } from '@/api/getDashboardInfo';
import StEditTitleAndColorContainer from './style';

const EditTitleAndColorChanger = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState<string>('');
  const [dashboardNameInputValue, setDashboardNameInputValue] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [dashboardColorValue, setDashboardColorValue] = useState('');
  const [currentDashboardColor, setCurrentDashboardColor] = useState('');

  const handleSubmitChangeDashboard = async (e: SyntheticEvent) => {
    e.preventDefault();
    const updatedTitle = dashboardNameInputValue ? dashboardNameInputValue : title;
    const updatedColor = dashboardColorValue ? dashboardColorValue : currentDashboardColor;

    if (dashboardNameInputValue || dashboardColorValue) {
      if (!id) return;
      try {
        const result = await putDashboardChange(id, updatedTitle, updatedColor);
        if (result && result.status === 200) {
          if (dashboardNameInputValue) {
            setTitle(dashboardNameInputValue);
          }
          if (dashboardColorValue) {
            setCurrentDashboardColor(dashboardColorValue);
          }
          toast.success(DASHBOARD_MESSAGES.CHANGE_DASHBOARD);
        }
      } catch (error) {
        console.error('Error updating dashboard:', error);
        toast.error('대시보드 변경 중 오류가 발생했습니다.');
      }
      if (dashboardNameInputValue) setDashboardNameInputValue('');
      if (dashboardColorValue) setDashboardColorValue('');
    } else {
      toast.error(INPUT_ERROR_MESSAGES.PLEASE_ENTER_VALUE);
    }
  };

  const handleShowColorPicker = () => {
    setIsShow((prev) => !prev);
  };

  const handleChangeColor = (color: ColorResult) => {
    const newColorValue = color.hex;
    setDashboardColorValue(newColorValue);
  };

  useEffect(() => {
    const fetchDashboardInfo = async () => {
      if (!id) return;
      try {
        const response = await getDashboardInfo(id);
        setTitle(response.title);
        setCurrentDashboardColor(response.color);
      } catch (error) {
        console.error('Error fetching dashboard info:', error);
      }
    };
    fetchDashboardInfo();
  }, [id]);

  return (
    <StEditTitleAndColorContainer>
      <div className='dashboard-title'>{title}</div>
      <div className='change-form-div'>
        <form onSubmit={handleSubmitChangeDashboard}>
          <InputText
            value={dashboardNameInputValue}
            setValue={setDashboardNameInputValue}
            autoFocus={true}
            required
            labelName='대시보드 이름'
            placeholder='대시보드 이름을 입력하세요.'
          />
          <div className='input-colorpicker__group'>
            <div className='' onClick={handleShowColorPicker} role='button'>
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
          <button className='change-button' type='submit'>
            변경
          </button>
        </form>
      </div>
    </StEditTitleAndColorContainer>
  );
};

export default EditTitleAndColorChanger;
