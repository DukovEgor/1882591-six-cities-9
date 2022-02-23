import { Navigate } from 'react-router-dom';
import { AutorizationStatus, AppRoutes } from '../../utils/const';

type PrivateRouteProps = {
  authorizationStatus: AutorizationStatus;
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AutorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.SignIn} />
  );
}
