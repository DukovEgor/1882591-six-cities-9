import { Offers } from '../../types/offer';
import Map from '../map/map';

type mainMapProps = {
  offers: Offers,
}

export default function MainMap({ offers }: mainMapProps) {
  return (
    <Map className={'cities__map'} offers={offers} />
  );
}
