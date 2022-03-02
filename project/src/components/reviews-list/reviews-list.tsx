import { ReactNode } from 'react';

type StandardComponentProps = {
  children: ReactNode
}
export default function ReviewsList({children}: StandardComponentProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {children}
    </ul>
  );
}
