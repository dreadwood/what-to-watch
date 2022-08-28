import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import ErrorPage from '../../pages/error-page/error-page';
import FilmPage from '../../pages/film-page/film-page';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';

type AppProps = {
  promoFilmData: {
    NAME: string,
    GENRE: string,
    DATE: number,
  }
}

function App({promoFilmData}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              filmName={promoFilmData.NAME}
              filmGenre={promoFilmData.GENRE}
              filmDate={promoFilmData.DATE}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={<MyListPage />}
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewPage />}
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
