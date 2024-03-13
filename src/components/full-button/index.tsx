import { ReactNode } from 'react';
import StFullButton from './style';

interface fullButtonProps {
  disabled: boolean;
  children: ReactNode;
}

/**
 * submit 용 버튼입니다. 버튼 타입이 submit임.
 * @param disabled - 버튼의 비/활성화 상태 제어
 * @param children - 버튼 텍스트
 * @returns
 */

const FullButton = ({ disabled, children }: fullButtonProps) => {
  return (
    <>
      <StFullButton disabled={disabled}>
        <span>{children}</span>
      </StFullButton>
    </>
  );
};

export default FullButton;
