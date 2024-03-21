import { AppDispatch } from '@/redux/myInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ColumnContainer } from './style';
import { useEffect, useState } from 'react';
import { ModalRootState, openModal, setOpenModalName } from '@/redux/modalSlice';
import { ColumnCardType } from '@/types/columnCardType';
import { dashboardIdTypes } from '@/types/dashboardIdTypes';
import { Types } from '@/types/columnDetailTypes';
import axiosInstance from '@/api/instance/axiosInstance';
import API from '@/api/constants';
import Card from '../card';
import LoadingSpinner from '@/components/loading-spinner';
import EditColumnModal from '../modal-edit-column';
import CreateCard from '../modal-contents/create-card';

interface Props {
  columnData: dashboardIdTypes['Columns'];
  memberData: dashboardIdTypes['Members'][];
  viewColumns: () => void;
  dashboardId: string | undefined;
  columns: dashboardIdTypes['Columns'][];
}

const Column = ({ columnData, memberData, viewColumns, dashboardId, columns }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const MORE_CARDS = 3;
  const openModalName = useSelector((state: ModalRootState) => state.modal.openModalName);
  const [cardInfo, setCardInfo] = useState<ColumnCardType[]>();
  const [totalCount, setTotalCount] = useState<Types['totalCount']>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState<number>(MORE_CARDS);

  const idGroup = {
    columnTitle: columnData.title,
    columnId: columnData.id,
    dashboardId: Number(dashboardId),
  };

  const handleOpenCreateCardModal = () => {
    dispatch(setOpenModalName(`createCard${columnData.id}`));
    dispatch(openModal(`createCard${columnData.id}`));
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

  const viewCards = async () => {
    setIsLoading(true);
    await axiosInstance
      .get(`${API.CARDS.CARDS}?size=${pages}&columnId=${columnData.id}`)
      .then((res) => {
        setCardInfo(res.data.cards);
        setTotalCount(res.data.totalCount);
      })
      .catch((err) => alert(`카드 조회 실패(${err})`))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    viewCards();
  }, [pages]);

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
        <button type='button' className='add-card' onClick={handleOpenCreateCardModal}>
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
              memberData={memberData}
              viewCards={viewCards}
            />
          ))}
      </div>

      <div className='column-foot'>
        {totalCount > pages && (
          <button
            onClick={() => {
              setPages((prev) => prev + MORE_CARDS);
            }}
          >
            더보기
          </button>
        )}
      </div>

      {openModalName === `createCard${columnData.id}` && (
        <CreateCard memberData={memberData} columnData={columnData} dashboardId={dashboardId} viewCards={viewCards} />
      )}
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
