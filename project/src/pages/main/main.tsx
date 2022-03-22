import Header from '../../components/header/header';
import LocationList from '../../components/location-list/locations-list';
import Map from '../../components/map/map';
import Navigation from '../../components/navigation/navigation';
import OffersList from '../../components/offers-list/offers-list';
import Sorting from '../../components/sorting/sorting';
import { useAppSelector } from '../../hooks';
import { getFilteredOffers, getSortedOffers } from '../../utils/utils';


export default function Main(): JSX.Element {

  const { city, offers, sortType } = useAppSelector((state) => state);

  const filteredOffers = getFilteredOffers(city, offers);
  const sortedOffers = getSortedOffers(filteredOffers, sortType);

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
              <b className="places__found">{filteredOffers.length} places to stay in {city.name}</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={sortedOffers} className={'cities__place-card'} />
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
