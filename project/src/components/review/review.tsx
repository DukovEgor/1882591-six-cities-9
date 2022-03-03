
export default function Review({ review, rating }: { review: string, rating: string }): JSX.Element {
  const widthPointsPerStep = 20;
  const ratingWidth = Number(rating) * widthPointsPerStep;

  const date = new Date();
  const commentDate = date.toLocaleString('en-EN', { year: 'numeric', month: 'long' });
  const commentAttr = date.toLocaleString('en-EN', { year: 'numeric', month: 'numeric', day: 'numeric' });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          Max
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
          {review}
        </p>
        <time className="reviews__time" dateTime={`${commentAttr}`}>{`${commentDate}`}</time>
      </div>
    </li>
  );
}
