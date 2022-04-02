import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoritesListItem from '../../components/favorites-list-item/favorites-list-item';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavorites } from '../../store/api-actions';
import { Offers } from '../../types/offer';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

export default function Favorites() {

  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(({ DATA }) => DATA);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);


  const favoritesByPlace: {
    [groupName: string]: Offers
  } = {};

  favorites.forEach((favorite) => {
    if (favorite.city.name in favoritesByPlace) {
      favoritesByPlace[favorite.city.name].push(favorite);
    } else {
      favoritesByPlace[favorite.city.name] = [favorite];
    }
  });


  return (
    <div className="page">
      <Header>
        <Navigation />
      </Header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            favorites
              ?
              (
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    {Object.keys(favoritesByPlace).map((place) => <FavoritesListItem key={place} offers={favoritesByPlace[place]} city={place} />)}
                  </ul>
                </section>
              )
              :
              <FavoritesEmpty />
          }
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
