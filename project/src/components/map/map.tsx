import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { ANCHOR_SIZES, ICONS_SIZES } from '../../utils/const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';


type mapProps = {
  className: string,
}

export default function Map({ className }: mapProps) {
  const { isCardHovered, offers, city  } = useAppSelector((state) => state);

  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: ICONS_SIZES,
    iconAnchor: ANCHOR_SIZES,
  });

  const activeCustomIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: ICONS_SIZES,
    iconAnchor: ANCHOR_SIZES,
  });

  useEffect(() => {
    if (map) {
      map.flyTo([city.location.latitude, city.location.longitude], city.location.zoom);
      offers.forEach((offer) => {
        const { location: { latitude, longitude } } = offer;
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: isCardHovered.isHovered && offer.id === isCardHovered.id ? activeCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [activeCustomIcon, city.location.latitude, city.location.longitude, city.location.zoom, defaultCustomIcon, isCardHovered.id, isCardHovered.isHovered, map, offers]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}
