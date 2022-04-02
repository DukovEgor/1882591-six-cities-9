import { memo, ReactElement } from 'react';
import Logo from '../logo/logo';

type headerProps = {
  children?: ReactElement;
}

function Header({ children }: headerProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {children}
        </div>
      </div>
    </header>
  );
}

export default memo(Header, (prevProps, nextProps) => prevProps.children !== nextProps.children);
