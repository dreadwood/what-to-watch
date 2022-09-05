import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import ReviewPage from '../../pages/add-review-page/add-review-page';
import ErrorPage from '../../pages/error-page/error-page';
import FilmPage from '../../pages/film-page/film-page';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import {AllComments} from '../../types/comment';
import {Film} from '../../types/film';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  promoFilmData: {
    NAME: string
    GENRE: string
    DATE: number
  }
  films: Film[]
  allComments: AllComments
}

function App({promoFilmData, films, allComments}: AppProps): JSX.Element {
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
