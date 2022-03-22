import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changePinIcon } from '../../store/actions';
import { widthPointsPerStep } from '../../utils/const';

type cardProps = {
  className: string,
  title: string,
  price: number,
  type: string,
  id: number,
  isPremium: boolean,
  isFavorite: boolean,
  rating: number,
}

export default function Card({ className, title, price, type, id, isPremium, isFavorite, rating }: cardProps): JSX.Element {

  const dispatch = useAppDispatch();

  const ratingWidth = rating * widthPointsPerStep;

  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={() => dispatch(changePinIcon({isHovered: true, id: id}))}
      onMouseLeave={() => dispatch(changePinIcon({isHovered: false, id: id}))}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src="img/apartment-01.jpg" width={260} height={200} alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
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
