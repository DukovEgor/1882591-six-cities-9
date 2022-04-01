import { useEffect } from 'react';
import { useAppDispatch } from '.';
import { changePinIcon } from '../store/actions';

export default function ChangePin(target: { isHovered: boolean, id: number }) {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changePinIcon(target));
  }, [dispatch, target]);
}
