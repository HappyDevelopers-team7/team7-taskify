import { useNavigate } from 'react-router-dom';
import StDeleteButton from './style';
import { deleteDashboard } from '@/api/deleteDashboard';

interface EditDeleteButtonProps {
  dashboardId: string | undefined;
}

function EditDeleteButton({ dashboardId }: EditDeleteButtonProps) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    console.log(dashboardId);
    if (dashboardId !== undefined) {
      try {
        await deleteDashboard(dashboardId);
        navigate('/');
      } catch (error) {
        console.error('대시보드 삭제 중 오류 발생:', error);
      }
    }
  };
  return <StDeleteButton onClick={handleDelete}>대시보드 삭제하기</StDeleteButton>;
}
export default EditDeleteButton;
