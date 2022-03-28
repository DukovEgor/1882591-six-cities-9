import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type OptionalRouteProps = {
  children: JSX.Element;
}

export default function OptionalRoute({children}: OptionalRouteProps): JSX.Element {

  const { id } = useParams();
  const offerId = Number(id);

  const { offers } = useAppSelector((state) => state);

  return (
    offers.some((index) => index.id === offerId)
      ? children
      : <Navigate to={'*'} />
  );
}
