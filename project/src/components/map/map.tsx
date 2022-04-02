import { memo, useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { ANCHOR_SIZES, ICONS_SIZES } from '../../utils/const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offers } from '../../types/offer';
import { City } from '../../types/city';
import { isHovered as hoveredInfo } from '../../types/isHovered';


type mapProps = {
  className: string,
  offers: Offers,
  city: City,
  isHovered: hoveredInfo,
}

function Map({ className, offers, city, isHovered }: mapProps) {

  const mapRef = useRef(null);
  const map = useMap({ mapRef, city, offers });

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

  const { isCardHovered, id } = isHovered;

  useEffect(() => {

    const markers: leaflet.Marker[] = [];

    if (map) {
      map.flyTo([city.location.latitude, city.location.longitude], city.location.zoom);

      offers.forEach((offer) => {
        const { location: { latitude, longitude } } = offer;

        const marker = leaflet.marker(
          {
            lat: latitude,
            lng: longitude,
          },
          {
            icon: isCardHovered && offer.id === id ? activeCustomIcon : defaultCustomIcon,
          });

        marker.addTo(map);
        markers.push(marker);
      });
    }

    return () => {
      markers.forEach((index) => index.remove());
    };
  }, [activeCustomIcon, city.location.latitude, city.location.longitude, city.location.zoom, defaultCustomIcon, id, isCardHovered, isHovered, map, offers]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    />
  );
}

export default memo(Map, (prevProps, nextProps) => prevProps.city === nextProps.city && prevProps.isHovered === nextProps.isHovered);
