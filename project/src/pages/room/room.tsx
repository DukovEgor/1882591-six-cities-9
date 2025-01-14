import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Bookmark from '../../components/bookmark/bookmark';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Navigation from '../../components/navigation/navigation';
import OffersList from '../../components/offers-list/offers-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchHotelAction, fetchNearbyAction, fetchReviewsAction } from '../../store/api-actions';

export default function Room(): JSX.Element {

  const { id } = useParams();
  const offerId = Number(id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHotelAction(offerId));
    dispatch(fetchReviewsAction(offerId));
    dispatch(fetchNearbyAction(offerId));
  }, [dispatch, offerId]);

  const { city } = useAppSelector(({ APP }) => APP);
  const { offer, reviews, nearby } = useAppSelector(({ DATA }) => DATA);
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);

  const { images, isPremium, isFavorite, title, rating, type, bedrooms, maxAdults, price, goods, host, description } = offer;
  const { avatarUrl, name, isPro } = host;

  return (
    <div className="page">
      <Header>
        <Navigation />
      </Header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, 6).map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="studio" />
                </div>))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>)}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <Bookmark isFavorite={isFavorite} className={'property__bookmark-button'} hotelId={offerId} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${rating * 20}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire" style={{
                  textTransform: 'capitalize',
                }}
                >
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What`s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>)}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList reviews={reviews.slice().sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).slice(0, 10)} authorizationStatus={authorizationStatus} offerId={offerId} />
            </div>
          </div>
          <Map className={'property__map'} offers={nearby.concat(offer)} city={city} isHovered={{ isCardHovered: true, id: offerId }} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearby} className={'near-places__card'} onHover={() => ''} />
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}
