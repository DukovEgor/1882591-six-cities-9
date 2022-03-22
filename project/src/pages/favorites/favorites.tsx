import { Link } from 'react-router-dom';
import Card from '../../components/card/card';
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
                    <Card key={`${index.id + 234}`}
                      className={'favorites__card'}
                      {...index}
                    />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>
    </div>

  );
}
