import { City, Points } from '../../types/map';
import Map from '../map/map';
type mainMapProps = {
  city: City,
  points: Points,
}
export default function MainMap({ city, points }: mainMapProps) {
  return (
    <Map city={city} points={points} className={'cities__map'} />
  );
}
