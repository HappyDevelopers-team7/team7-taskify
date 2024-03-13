import InputSearch from '../input/input-search';
import StInvitedSection from './style';

const InvitedList = () => {
  return (
    <>
      <StInvitedSection>
        <div className='invite-header'>
          <h3>초대받은 대시보드</h3>
          <InputSearch />
        </div>
        <table>
          <colgroup>
            <col width='33.33%' />
            <col width='33.33%' />
            <col width='33.33%' />
          </colgroup>
          <thead>
            <tr>
              <th>이름</th>
              <th>초대자</th>
              <th>수락 여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>대시보드 예시</td>
              <td>대시보드 예시대시보드 예시대시보드 예시</td>
              <td>
                <div className='button-group'>
                  <button type='button' className='button-reject'>
                    거절
                  </button>
                  <button type='button' className='button-accept'>
                    수락
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>대시보드 예시</td>
              <td>대시보드 예시대시보드 예시대시보드 예시</td>
              <td>
                <div className='button-group'>
                  <button type='button' className='button-reject'>
                    거절
                  </button>
                  <button type='button' className='button-accept'>
                    수락
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>대시보드 예시</td>
              <td>대시보드 예시대시보드 예시대시보드 예시</td>
              <td>
                <div className='button-group'>
                  <button type='button' className='button-reject'>
                    거절
                  </button>
                  <button type='button' className='button-accept'>
                    수락
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </StInvitedSection>
    </>
  );
};

export default InvitedList;
