import { getInvitation } from '@/api/getInvitation';
import InputSearch from '../input/input-search';
import StInvitedSection from './style';
import { useEffect } from 'react';
import NoInvitation from '../no-invitation';
import { RootState, setInvitationList, updateInvitationList } from '@/redux/invitationSlice';
import { useDispatch, useSelector } from 'react-redux';

const InvitedList = () => {
  const dispatch = useDispatch();
  const initialInvitationList = useSelector((state: RootState) => state.invitationList.initialList);
  const updatedInvitationList = useSelector((state: RootState) => state.invitationList.updatedList);

  const setInvitation = async () => {
    const result = await getInvitation();
    dispatch(setInvitationList(result.invitations));
    dispatch(updateInvitationList(result.invitations));
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
                              <button type='button' className='button-reject'>
                                거절
                              </button>
                              <button type='button' className='button-accept'>
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
    </>
  );
};

export default InvitedList;
