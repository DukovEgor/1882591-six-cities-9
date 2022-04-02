import { Link } from 'react-router-dom';
import { Offers } from '../../types/offer';
import OffersList from '../offers-list/offers-list';

type FavoritesListItemProps = {
  offers: Offers,
  city: string,
};

export default function FavoritesListItem({city, offers}: FavoritesListItemProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <OffersList offers={offers} className={'favorites__card'} handleHoverEffect={() => ''} />
      </div>
    </li>
  );
}

