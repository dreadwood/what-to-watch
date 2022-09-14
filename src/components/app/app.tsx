import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import ReviewPage from '../../pages/add-review-page/add-review-page';
import ErrorPage from '../../pages/error-page/error-page';
import FilmPage from '../../pages/film-page/film-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import {isCheckedAuth} from '../../services/authorization';
import {AllComments} from '../../types/comment';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  promoFilmData: {
    NAME: string
    GENRE: string
    DATE: number
  }
  allComments: AllComments
}

function App({promoFilmData, allComments}: AppProps): JSX.Element {
  const {authorizationStatus, films, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingPage />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage promoFilmData={promoFilmData} />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListPage films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Film}/:id`}
          element={
            <FilmPage
              films={films}
              allComments={allComments}
            />
          }
        />
        <Route
          path={`${AppRoute.Film}/:id${AppRoute.AddReview}`}
          element={<ReviewPage films={films} />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
