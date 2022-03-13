import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { City, Points } from '../../types/map';
import { URL_MARKER_DEFAULT } from '../../utils/const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

type mapProps = {
  city: City,
  points: Points,
  className: string,
};

export default function Map({ city, points, className }: mapProps) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [defaultCustomIcon, map, points]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}
