import { memo } from 'react';
import { Offers } from '../../types/offer';
import Card from '../card/card';

type OffersListProps = {
  offers: Offers,
  className: string,
}

function OffersList({ className, offers }: OffersListProps) {

  return (
    <>
      {offers.map((index) => (
        <Card
          className={className}
          key={index.id}
          index={index}
        />))}
    </>
  );
}

export default memo(OffersList, (prevProps, nextProps) =>
  prevProps.offers === nextProps.offers
   &&
   prevProps.className === nextProps.className,
);
