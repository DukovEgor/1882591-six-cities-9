import { offer } from '../../types/offer';
import Card from '../card/card';

type OffersListProps = {
  offers: offer[];
}

export default function OffersList({offers}: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((index) => <Card key={index.id} title={index.title} price={index.price} type={index.type} id={index.id} />)}
    </div>
  );
}
