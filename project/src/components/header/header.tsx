import { ReactElement } from 'react';
import Logo from '../logo/logo';

type headerProps = {
  children?: ReactElement;
}

export default function Header({ children }: headerProps) {
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
