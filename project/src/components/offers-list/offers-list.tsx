import { memo } from 'react';
import { Offers } from '../../types/offer';
import Card from '../card/card';
import { handleHoverEffect as callbackType } from '../../types/isHovered';

type OffersListProps = {
  offers: Offers,
  className: string,
  handleHoverEffect: callbackType,
}

function OffersList({ className, offers, handleHoverEffect }: OffersListProps) {

  return (
    <>
      {offers.map((index) => (
        <Card
          className={className}
          key={index.id}
          index={index} handleHoverEffect={handleHoverEffect}
        />))}
    </>
  );
}

export default memo(OffersList, (prevProps, nextProps) =>
  prevProps.offers === nextProps.offers);
