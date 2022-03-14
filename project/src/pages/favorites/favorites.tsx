import FavoriteCard from '../../components/favorite-card/favorite-card';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';
import { Offer } from '../../types/offer';

type favoritesProps = {
  offers: Offer[];
};

export default function Favorites({ offers }: favoritesProps) {
  return (
    <div className="page">
      <Header>
        <Navigation />
      </Header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((index) => (
                    <FavoriteCard key={index.id} title={index.title} price={index.price} type={index.type} id={index.id} bedrooms={0} city={{
                      location: {
                        latitude: 0,
                        longitude: 0,
                        zoom: 0,
                      },
                      name: '',
                    }} description={''} goods={[]} host={{
                      avatarUrl: '',
                      id: 0,
                      isPro: false,
                      name: '',
                    }} images={[]} isFavorite={false} isPremium={false} location={{
                      latitude: 0,
                      longitude: 0,
                      zoom: 0,
                    }} maxAdults={0} previewImage={''} rating={0}
                    />))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>

  );
}
