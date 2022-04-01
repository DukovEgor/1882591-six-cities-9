import { memo, MutableRefObject, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changePinIcon } from '../../store/app-process';
import { Offer } from '../../types/offer';
import { widthPointsPerStep } from '../../utils/const';

type cardProps = {
  className: string,
  index: Offer,
}

function Card({ index, className }: cardProps): JSX.Element {

  const { title, price, type, id, isPremium, isFavorite, rating, previewImage } = index;
  const dispatch = useAppDispatch();

  const ratingWidth = rating * widthPointsPerStep;

  const cardRef: MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    const current = cardRef.current;
    current?.addEventListener('mouseover', () => {
      dispatch(changePinIcon({ isHovered: true, id }));
    });
    current?.addEventListener('mouseleave', () => {
      dispatch(changePinIcon({ isHovered: false, id }));
    });

    return () => {
      current?.removeEventListener('mouseover', () => {
        dispatch(changePinIcon({ isHovered: true, id }));
      });
      current?.removeEventListener('mouseleave', () => {
        dispatch(changePinIcon({ isHovered: false, id }));
      });
    };
  }, [dispatch, id]);

  return (
    <article ref={cardRef} className={`${className} place-card`}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${className === 'favorites__card' ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/room/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place" />
        </Link>
      </div>
      <div className={`${className === 'favorites__card' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/room/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article >
  );
}

export default memo(Card, (prevProps, nextProps) =>
  prevProps.index === nextProps.index);
