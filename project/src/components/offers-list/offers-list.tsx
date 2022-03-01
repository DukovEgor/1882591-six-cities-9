import Card from '../card/card';

type offer = {
  title: string;
  price: number;
  type: string;
  id: number;
};

type OffersListProps = {
  offers: offer[];
}

export default function OffersList({offers}: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} title={offer.title} price={offer.price} type={offer.type} id={offer.id} />)}
    </div>
  );
}
