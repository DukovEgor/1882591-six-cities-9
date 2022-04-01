import { memo, MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/app-process';
import { City } from '../../types/city';
import { CITIES } from '../../utils/const';

type LocationListProps = {
  city: City,
}

function LocationList({ city }: LocationListProps) {

  const dispatch = useAppDispatch();

  const handleLocationClick = (evt: MouseEvent<HTMLAnchorElement>, name: City) => {
    evt.preventDefault();
    dispatch(setCity(name));
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((idx) => (
        <li key={idx.name} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${idx.name === city.name ? 'tabs__item--active' : ''}`}
            href="/"
            onClick={(evt) => handleLocationClick(evt, idx)}
          >
            <span>{idx.name}</span>
          </a>
        </li>))}
    </ul >
  );
}

export default memo(LocationList, (prevProps, nextProps) => prevProps.city === nextProps.city);
