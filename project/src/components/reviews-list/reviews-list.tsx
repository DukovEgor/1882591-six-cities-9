import { IReview } from '../../types/review';
import { AuthorizationStatus } from '../../utils/const';
import Review from '../review/review';
import ReviewsForm from '../reviews-form/reviews-form';

type ReviewsListProps = {
  reviews: IReview[],
  offerId: number,
  authorizationStatus: AuthorizationStatus,
}

export default function ReviewsList({ reviews, offerId, authorizationStatus }: ReviewsListProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review key={review.id} {...review} />)}
        {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm id={offerId} />}
      </ul>
    </section>
  );
}
