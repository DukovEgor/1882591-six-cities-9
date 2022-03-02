export default function Review({ review, rating }: {review: string, rating: number}): JSX.Element {
  let ratingWidth = 0;
  switch (rating) {
    case 1:
      ratingWidth = 20;
      break;
    case 2:
      ratingWidth = 40;
      break;
    case 3:
      ratingWidth = 60;
      break;
    case 4:
      ratingWidth = 80;
      break;
    case 5:
      ratingWidth = 100;
      break;
    default:
      ratingWidth = 0;
      break;
  }
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
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}
