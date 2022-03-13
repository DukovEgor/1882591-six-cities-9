import { ReactNode } from 'react';

type ReviewsListProps = {
  children: ReactNode,
  reviewsCount: number,
}
export default function ReviewsList({ children, reviewsCount }: ReviewsListProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {children}
      </ul>
    </section>
  );
}
