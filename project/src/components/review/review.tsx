import { IReview } from '../../types/review';
import { widthPointsPerStep } from '../../utils/const';

export default function Review({user, comment, date, rating}: IReview): JSX.Element {

  const {avatarUrl, name} = user;

  const ratingWidth = rating * widthPointsPerStep;

  const rawDate = new Date(date);
  const commentDate = rawDate.toLocaleString('en-EN', { year: 'numeric', month: 'long' });
  const commentAttr = rawDate.toLocaleString('en-EN', { year: 'numeric', month: 'numeric', day: 'numeric' });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={`${commentAttr}`}>{`${commentDate}`}</time>
      </div>
    </li>
  );
}
