import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoutes, AuthorizationStatus } from '../../utils/const';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {

  const { authorizationStatus } = useAppSelector(({USER}) => USER);

  const { children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.SignIn} />
  );
}
