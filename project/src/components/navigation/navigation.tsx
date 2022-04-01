import { memo, MutableRefObject, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoutes, AuthorizationStatus } from '../../utils/const';

function Navigation() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { authorizationStatus, user } = useAppSelector(({ USER }) => USER);

  const outRef: MutableRefObject<HTMLAnchorElement | null> = useRef(null);

  const handleOut = (evt: MouseEvent) => {
    evt.preventDefault();

    dispatch(logoutAction());
    navigate(AppRoutes.Root);
  };

  useEffect(() => {
    const outCurrent = outRef.current;
    outCurrent?.addEventListener('click', handleOut);

    return () => {
      outCurrent?.removeEventListener('click', handleOut);
    };
  });

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to="/favorites">
            {authorizationStatus === AuthorizationStatus.Auth &&
              (
                <div className="header__avatar-wrapper user__avatar-wrapper" style={{
                  backgroundImage: `url(${user.avatarUrl ?? '../img/avatar.svg'})`,
                  borderRadius: '50%',
                }}
                >
                </div>
              )}
            {authorizationStatus === AuthorizationStatus.Auth ? (<span className="header__user-name user__name">{user.name}</span>) : (<span className="header__login">Sign in</span>)}
          </Link>
        </li>
        {authorizationStatus === AuthorizationStatus.Auth && (
          <li className="header__nav-item">
            <Link ref={outRef} className="header__nav-link" to="/sign-in">
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        )}
      </ul>
    </nav >
  );
}

export default memo(Navigation);
