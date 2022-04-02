import { useEffect } from 'react';
import { useAppDispatch } from '.';
import { changePinIcon } from '../store/app-process';

export default function ChangePin(target: { isHovered: boolean, id: number }) {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changePinIcon(target));
  }, [dispatch, target]);
}
