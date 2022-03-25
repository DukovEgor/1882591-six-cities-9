import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../utils/const';
import NotFound from '../../pages/404/404';
import Favorites from '../../pages/favorites/favorites';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import SignIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
//import { isCheckedAuth } from '../../utils/utils';


function App(): JSX.Element {
  const {  isDataLoaded } = useAppSelector((state) => state);

  //if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<Main />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Room}>
          <Route
            path=":id"
            element={<Room />}
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
    </BrowserRouter >
  );
}

export default App;
