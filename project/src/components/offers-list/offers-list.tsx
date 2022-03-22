import { Offers } from '../../types/offer';
import Card from '../card/card';

type OffersListProps = {
  offers: Offers,
  className: string,
}

export default function OffersList({ className, offers }: OffersListProps) {
  let OFFERS_TO_SHOW;
  className === 'near-places__card' ? OFFERS_TO_SHOW = 3 : OFFERS_TO_SHOW = undefined;
  return (
    <>
      {offers.slice(0, OFFERS_TO_SHOW).map((index) => (
        <Card
          className={className}
          key={index.id}
          title={index.title}
          price={index.price}
          type={index.type}
          id={index.id}
          isPremium={index.isPremium}
          isFavorite={index.isFavorite}
          rating={index.rating}
        />))}
    </>
  );
}
