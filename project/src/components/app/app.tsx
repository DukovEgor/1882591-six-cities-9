import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes, AutorizationStatus } from '../../utils/const';
import NotFound from '../../pages/404/404';
import Favorites from '../../pages/favorites/favorites';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import SignIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offer';


type PropsType = {
  placesToStay: number;
  offers: Offer[];
}

function App({ placesToStay, offers }: PropsType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<Main placesToStay={placesToStay} offers={offers}/>}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute authorizationStatus={AutorizationStatus.Auth}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Room}
          element={<Room />}
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
