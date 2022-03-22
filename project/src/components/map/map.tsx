import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { ANCHOR_SIZES, ICONS_SIZES, URL_MARKER_DEFAULT } from '../../utils/const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offers } from '../../types/offer';
import { City } from '../../types/city';


type mapProps = {
  className: string,
  offers: Offers,
  city: City,
}

export default function Map({ className, offers, city }: mapProps) {

  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: ICONS_SIZES,
    iconAnchor: ANCHOR_SIZES,
  });

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
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
  }, [map, offers, city, defaultCustomIcon]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}
