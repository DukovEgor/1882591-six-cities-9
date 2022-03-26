import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoutes, AuthorizationStatus } from '../../utils/const';

export default function Navigation() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { authorizationStatus } = useAppSelector((state) => state);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to="/favorites">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {authorizationStatus === AuthorizationStatus.Auth ? (<span className="header__user-name user__name">Oliver.conner@gmail.com</span>) : (<span className="header__login">Sign in</span>)}
          </Link>
        </li>
        {authorizationStatus === AuthorizationStatus.Auth && (
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/sign-in" onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
              navigate(AppRoutes.Root);
            }}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        )}
      </ul>
    </nav >
  );
}
