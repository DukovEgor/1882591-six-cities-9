import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes, AutorizationStatus } from '../../utils/const';
import NotFound from '../../pages/404/404';
import Favorites from '../../pages/favorites/favorites';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import SignIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offer';
import { CITY } from '../../mocks/city';
import { points } from '../../mocks/points';


type PropsType = {
  placesToStay: number,
  offers: Offers,
}

function App({ placesToStay, offers }: PropsType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<Main placesToStay={placesToStay} offers={offers} city={CITY} points={points} />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute authorizationStatus={AutorizationStatus.Auth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Room}
          element={<Room city={CITY} points={points} />}
        />
        <Route
          path={AppRoutes.SignIn}
          element={<SignIn />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
