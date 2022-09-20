import {Route, Routes} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import ReviewPage from '../../pages/review-page/review-page';
import ErrorPage from '../../pages/error-page/error-page';
import FilmPage from '../../pages/film-page/film-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import {isCheckedAuth} from '../../services/authorization';
import HistoryRouter from '../history-route/history-route';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  const {
    authorizationStatus,
    films,
    isDataLoaded
  } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingPage />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Film}/:id`}
          element={
            <FilmPage />
          }
        />
        <Route
          path={`${AppRoute.Film}/:id${AppRoute.AddReview}`}
          element={<ReviewPage films={films} />}
        />
        <Route
          path={`${AppRoute.Player}/:id`}
          element={<PlayerPage />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<ErrorPage />}
        />
      </Routes>
    </HistoryRouter>

  );
}

export default App;
