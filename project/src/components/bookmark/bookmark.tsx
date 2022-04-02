import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToFavorite } from '../../store/api-actions';
import { AuthorizationStatus } from '../../utils/const';

type bookmarkProps = {
  isFavorite: boolean,
  className: string,
  hotelId: number,
}
export default function Bookmark({ isFavorite, className, hotelId }: bookmarkProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { authorizationStatus } = useAppSelector(({ USER }) => USER);

  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);

  return (
    <button className={`${className} ${favoriteStatus && 'place-card__bookmark-button--active'} button`} type="button" onClick={() => {
      if (authorizationStatus !== AuthorizationStatus.Auth) {navigate('/sign-in');}
      dispatch(addToFavorite({ id: hotelId, status: favoriteStatus }));
      setFavoriteStatus((prev) => !prev);
    }}
    >
      <svg className="place-card__bookmark-icon" width='100%' height='100%'>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
