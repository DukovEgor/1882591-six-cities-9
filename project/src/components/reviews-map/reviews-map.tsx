import { City, Points } from '../../types/map';
import Map from '../map/map';
type reviewsMapProps = {
  city: City,
  points: Points,
}
export default function ReviewsMap({ city, points }: reviewsMapProps) {
  return (
    <Map city={city} points={points} className={'property__map'} />
  );
}
