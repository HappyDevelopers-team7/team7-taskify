import { getInvitation } from '@/api/getInvitation';
import InputSearch from '../input/input-search';
import StInvitedSection from './style';
import { useEffect, useRef, useState } from 'react';
import NoInvitation from '../no-invitation';
import { InvitationRootState, setInvitationList, updateInvitationList } from '@/redux/invitationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ModalRootState, openModal, setOpenModalName } from '@/redux/modalSlice';
import RejectInvitation from '../modal-contents/reject-invitation';
import AcceptInvitation from '../modal-contents/accept-invitation';

const InvitationList = () => {
  const dispatch = useDispatch();
  const initialInvitationList = useSelector((state: InvitationRootState) => state.invitationList.initialList);
  const updatedInvitationList = useSelector((state: InvitationRootState) => state.invitationList.updatedList);
  const openModalName = useSelector((state: ModalRootState) => state.modal.openModalName);
  const [selectedInvitationId, setSelectedInvitationId] = useState(0);
  const [invitationLength, setInvitationLength] = useState(0);
  const [size, setSize] = useState(10);
  const observerTarget = useRef<HTMLDivElement>(null);
  const preventRef = useRef(true); //옵저버 중복 실행 방지
  const endRef = useRef(false); //모든 글 로드 확인

  useEffect(() => {
    //옵저버 생성
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      observer.disconnect();
    };
  });

  const obsHandler = (entries: IntersectionObserverEntry[]) => {
    //옵저버 콜백함수
    const target = entries[0];
    if (!endRef.current && target.isIntersecting && preventRef.current) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setSize((prev) => prev + 10); //페이지 값 증가
    }
  };

  const setInvitation = async () => {
    try {
      const result = await getInvitation(size);
      setInvitationLength(result.invitations.length);
      dispatch(setInvitationList(result.invitations));
      dispatch(updateInvitationList(result.invitations));
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    setInvitation();
  }, [size]);

  const handleClickReject = (id: number) => {
    setSelectedInvitationId(id);
    dispatch(setOpenModalName('rejectInvitation'));
    dispatch(openModal('rejectInvitation'));
  };

  const handleClickAccept = (id: number) => {
    setSelectedInvitationId(id);
    dispatch(setOpenModalName('acceptInvitation'));
    dispatch(openModal('acceptInvitation'));
  };

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
                              <button
                                aria-haspopup='true'
                                type='button'
                                className='button-reject'
                                onClick={() => handleClickReject(item.id)}
                              >
                                거절
                              </button>
                              <button
                                aria-haspopup='true'
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
              {invitationLength >= 10 && <div id='invitation-observer' ref={observerTarget}></div>}
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

export default InvitationList;
