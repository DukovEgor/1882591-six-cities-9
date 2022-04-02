import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { widthPointsPerStep } from '../../utils/const';
import { handleHoverEffect as callbackType } from '../../types/isHovered';
import Bookmark from '../bookmark/bookmark';

type cardProps = {
  className: string,
  index: Offer,
  handleHoverEffect: callbackType,
}

function Card({ index, className, handleHoverEffect }: cardProps): JSX.Element {

  const { title, price, type, id, isPremium, isFavorite, rating, previewImage } = index;

  const ratingWidth = Math.round(rating) * widthPointsPerStep;

  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={() => handleHoverEffect({ isCardHovered: true, id })}
      onMouseLeave={() => handleHoverEffect({ isCardHovered: false, id })}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${className === 'favorites__card' ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/room/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place" />
        </Link>
      </div>
      <div className={`${className === 'favorites__card' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <Bookmark className='place-card__bookmark-button' isFavorite={isFavorite} hotelId={id} />
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
  prevProps.index.isFavorite === nextProps.index.isFavorite);
