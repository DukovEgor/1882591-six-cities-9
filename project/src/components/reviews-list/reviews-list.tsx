import { ReactNode } from 'react';

type ReviewsListProps = {
  children: ReactNode
}
export default function ReviewsList({children}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {children}
    </ul>
  );
}
