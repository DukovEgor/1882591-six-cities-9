import { Offers } from '../../types/offer';
import Card from '../card/card';

type OffersListProps = {
  offers: Offers,
  className: string,
}

export default function OffersList({ className, offers }: OffersListProps) {

  return (
    <>
      {offers.map((index) => (
        <Card
          className={className}
          key={index.id}
          {...index}
        />))}
    </>
  );
}
