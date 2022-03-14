import { Offers } from '../../types/offer';
import Map from '../map/map';

type reviewsMapProps = {
  offers: Offers,
}

export default function ReviewsMap({ offers }: reviewsMapProps) {
  return (
    <Map className={'property__map'} offers={offers} />
  );
}
