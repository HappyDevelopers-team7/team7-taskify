import { getInvitation } from '@/api/getInvitation';
import InputSearch from '../input/input-search';
import StInvitedSection from './style';
import { useEffect, useState } from 'react';
import NoInvitation from '../no-invitation';
import { InvitationRootState, setInvitationList, updateInvitationList } from '@/redux/invitationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ModalRootState, openModal, setOpenModalName } from '@/redux/modalSlice';
import RejectInvitation from '../modal-contents/reject-invitation';
import AcceptInvitation from '../modal-contents/accept-invitation';

const InvitedList = () => {
  const dispatch = useDispatch();
  const initialInvitationList = useSelector((state: InvitationRootState) => state.invitationList.initialList);
  const updatedInvitationList = useSelector((state: InvitationRootState) => state.invitationList.updatedList);
  const openModalName = useSelector((state: ModalRootState) => state.modal.openModalName);
  const [selectedInvitationId, setSelectedInvitationId] = useState(0);

  const setInvitation = async () => {
    const result = await getInvitation();
    dispatch(setInvitationList(result.invitations));
    dispatch(updateInvitationList(result.invitations));
  };

  const handleClickReject = () => {
    dispatch(setOpenModalName('rejectInvitation'));
    dispatch(openModal('rejectInvitation'));
  };

  const handleClickAccept = (id: number) => {
    setSelectedInvitationId(id);
    dispatch(setOpenModalName('acceptInvitation'));
    dispatch(openModal('acceptInvitation'));
  };

  useEffect(() => {
    setInvitation();
  }, []);
  return (
    <>
      <StInvitedSection>
        <div className='invite-wrapper'>
          <h3>초대받은 대시보드</h3>
        </div>
        {initialInvitationList.length > 0 ? (
          <>
            <div className='invite-wrapper'>
              <InputSearch />
            </div>
            <div className='invite-list'>
              <table>
                <colgroup>
                  <col width='33.33%' />
                  <col width='33.33%' />
                  <col width='33.33%' />
                </colgroup>
                <thead>
                  <tr>
                    <th>대시보드 이름</th>
                    <th>초대자</th>
                    <th>수락 여부</th>
                  </tr>
                </thead>
                <tbody>
                  {updatedInvitationList.map((item) => (
                    <tr key={item.id}>
                      <td>{item.dashboard.title}</td>
                      <td>{item.inviter.nickname}</td>
                      <td>
                        <div className='button-group'>
                          {item.inviteAccepted ? (
                            <span>수락 완료</span>
                          ) : (
                            <>
                              <button type='button' className='button-reject' onClick={handleClickReject}>
                                거절
                              </button>
                              <button
                                type='button'
                                className='button-accept'
                                onClick={() => handleClickAccept(item.id)}
                              >
                                수락
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <NoInvitation />
        )}
      </StInvitedSection>
      {openModalName === 'rejectInvitation' ? <RejectInvitation invitationId={selectedInvitationId} /> : null}
      {openModalName === 'acceptInvitation' ? <AcceptInvitation invitationId={selectedInvitationId} /> : null}
    </>
  );
};

export default InvitedList;
