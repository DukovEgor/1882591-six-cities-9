import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../utils/const';
import NotFound from '../../pages/404/404';
import Favorites from '../../pages/favorites/favorites';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import SignIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history/browser-history';
import { isCheckedAuth } from '../../utils/utils';
import OptionalRoute from '../optional-route/optional-route';

function App(): JSX.Element {

  const { authorizationStatus, isDataLoaded } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<Main />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Room} >
          <Route path=":id" element={
            <OptionalRoute>
              <Room />
            </OptionalRoute>
          }
          />
        </Route>
        <Route
          path={AppRoutes.SignIn}
          element={<SignIn />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter >
  );
}

export default App;
