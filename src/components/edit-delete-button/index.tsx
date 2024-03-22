import { useNavigate, useParams } from 'react-router-dom';
import StDeleteButton from './style';
import { deleteDashboard } from '@/api/deleteDashboard';

function EditDeleteButton() {
  const { dashboardId } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (dashboardId !== undefined) {
      deleteDashboard(dashboardId);
      navigate('/');
    }
  };
  return <StDeleteButton onClick={handleDelete}>대시보드 삭제하기</StDeleteButton>;
}
export default EditDeleteButton;
