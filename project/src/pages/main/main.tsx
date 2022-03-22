import Header from '../../components/header/header';
import LocationList from '../../components/location-list/locations-list';
import Map from '../../components/map/map';
import Navigation from '../../components/navigation/navigation';
import OffersList from '../../components/offers-list/offers-list';
import { useAppSelector } from '../../hooks';
import { getFilteredOffers } from '../../utils/utils';


export default function Main(): JSX.Element {
  const { city, offers } = useAppSelector((state) => state);
  const cityOffers = getFilteredOffers(city, offers);
  return (
    <div className="page page--gray page--main">
      <Header>
        <Navigation />
      </Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList city={city} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={cityOffers} className={'cities__place-card'} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map className={'cities__map'} offers={offers} city={city} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
