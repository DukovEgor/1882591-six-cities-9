import { MutableRefObject, useEffect, useState } from 'react';
import { Map, TileLayer } from 'leaflet';

type useMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>,
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
  },
};

export default function useMap({ mapRef, city: {location: {latitude, longitude, zoom}} }: useMapProps): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      instance.addLayer(layer);
      setMap(instance);
    }
  }, [latitude, longitude, map, mapRef, zoom]);

  return map;
}
