import {useEffect} from 'react';
import FilmInfo from '../../components/film-info/film-info';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import Logo from '../../components/logo/logo';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import UserBlock from '../../components/user-block/user-block';
import {DEFAULT_GENRE, STEP_SHOW_CARDS} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, addShownCards, resetFilmList} from '../../store/action';
import {Film} from '../../types/film';
import LoadingPage from '../loading-page/loading-page';

const filterFilms = (filmsData: Film[], genre: string) => {
  if (genre === DEFAULT_GENRE) {
    return filmsData;
  }

  return filmsData.filter((film) => film.genre === genre);
};

function MainPage(): JSX.Element {
  const {
    activeGenre,
    genres,
    films,
    promoFilm,
    quantityShownCards,
    authorizationStatus,
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetFilmList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!promoFilm) {
    return (
      <LoadingPage />
    );
  }

  const onGenreClick = (genre: string) => {
    dispatch(resetFilmList());
    dispatch(changeGenre(genre));
  };

  const onShowMoreClick = () => {
    dispatch(addShownCards(STEP_SHOW_CARDS));
  };

  const filtredFilm = filterFilms(films, activeGenre);

  return (
    <>
      <section className="film-card" style={{backgroundColor: promoFilm?.colorPoster}}>
        <div className="film-card__bg">
          <img src={promoFilm.backgroundPoster} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.poster} alt={`${promoFilm.name} poster`} width="218" height="327" />
            </div>

            <FilmInfo
              film={promoFilm}
              authorizationStatus={authorizationStatus}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            activeGenre={activeGenre}
            genres={genres}
            onGenreClick={onGenreClick}
          />

          <FilmsList films={filtredFilm.slice(0, quantityShownCards)} />

          {quantityShownCards < filtredFilm.length && (
            <ShowMoreButton onButtonCLick={onShowMoreClick} />
          )}

        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
