import { memo, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { setSortType } from '../../store/app-process';
import { sortingTypes } from '../../utils/const';

function Sorting() {
  const dispatch = useAppDispatch();

  const [checkedType, setCheckedType] = useState('Popular');
  const [isOpenSort, setIsOpen] = useState(false);

  const openSortHandler = () => setIsOpen((prevState) => !prevState);

  const changeSortHandler = (type: { type: string, }) => {
    setCheckedType(type.type);
    setIsOpen((prevState) => !prevState);
    dispatch(setSortType(type.type));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => openSortHandler()}>
        {checkedType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSort && 'places__options--opened'}`}>
        {sortingTypes.map((type) => (
          <li
            key={type.type}
            className={`places__option ${checkedType === type.type ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => changeSortHandler(type)}
          >{type.type}
          </li>
        ))}
      </ul>
    </form>
  );
}
export default memo(Sorting);
