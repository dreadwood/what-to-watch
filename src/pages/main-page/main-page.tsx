import {useEffect} from 'react';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import Logo from '../../components/logo/logo';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import UserBlock from '../../components/user-block/user-block';
import {DEFAULT_GENRE, STEP_SHOW_CARDS} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, addShownCards, resetFilmList} from '../../store/action';
import { Film } from '../../types/film';

type MainPageProps = {
  promoFilmData: {
    NAME: string
    GENRE: string
    DATE: number
  }
}

const filterFilms = (filmsData: Film[], genre: string) => {
  if (genre === DEFAULT_GENRE) {
    return filmsData;
  }

  return filmsData.filter((film) => film.genre === genre);
};

function MainPage({promoFilmData}: MainPageProps): JSX.Element {
  const {
    NAME: promoFilmName,
    GENRE: promoFilmGenre,
    DATE: promoFilmDate,
  } = promoFilmData;

  const {activeGenre, genres, films, quantityShownCards} = useAppSelector((state) => state);
  const shownCards = filterFilms(films, activeGenre);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetFilmList());
  }, [dispatch]); // TODO: add dispatch for Eslint

  const onGenreClick = (genre: string) => {
    dispatch(resetFilmList());
    dispatch(changeGenre(genre));
  };

  const onShowMoreClick = () => {
    dispatch(addShownCards(STEP_SHOW_CARDS));
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmGenre}</span>
                <span className="film-card__year">{promoFilmDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
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

          <FilmsList films={shownCards.slice(0, quantityShownCards)} />

          {quantityShownCards < shownCards.length && (
            <ShowMoreButton onButtonCLick={onShowMoreClick} />
          )}

        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
