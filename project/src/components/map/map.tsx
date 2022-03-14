import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT } from '../../utils/const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offers } from '../../types/offer';


type mapProps = {
  offers: Offers,
  className: string,
}

export default function Map({ offers, className }: mapProps) {
  const offerForMock = offers[1];

  const mapRef = useRef(null);
  const map = useMap({mapRef, ...offerForMock});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const { location: { latitude, longitude } } = offer;
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [defaultCustomIcon, map, offers]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}
