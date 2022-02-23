import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../const';
import NotFound from '../../pages/404/404';
import Favorites from '../../pages/favorites/favorites';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import SignIn from '../../pages/sign-in/sign-in';


type PropsType = {
  placesToStay: number;
}

function App({ placesToStay }: PropsType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<Main placesToStay={5}/>}
        />
        <Route
          path={AppRoutes.Favorites}
          element={<Favorites/>}
        />
        <Route
          path={AppRoutes.Room}
          element={<Room/>}
        />
        <Route
          path={AppRoutes.SignIn}
          element={<SignIn/>}
        />
        <Route
          path='*'
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
