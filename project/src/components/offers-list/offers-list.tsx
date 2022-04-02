import { Offers } from '../../types/offer';
import Card from '../card/card';
import { handleHoverEffect as callbackType } from '../../types/isHovered';

type OffersListProps = {
  offers: Offers,
  className: string,
  handleHoverEffect: callbackType,
}

export default function OffersList({ className, offers, handleHoverEffect }: OffersListProps) {

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

