import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const portalContainer = document.getElementById('portal');

  if (!portalContainer) {
    return null;
  }

  return ReactDOM.createPortal(children, portalContainer);
};

const PortalContainer = ({ children }: PortalProps) => {
  return <Portal>{children}</Portal>;
};

export default PortalContainer;
