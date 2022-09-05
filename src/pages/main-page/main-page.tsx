import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {DEFAULT_GENRE} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, setDefaultGenre, updateFilmList} from '../../store/action';

type MainPageProps = {
  promoFilmData: {
    NAME: string
    GENRE: string
    DATE: number
  }
}

function MainPage({promoFilmData}: MainPageProps): JSX.Element {
  const {
    NAME: promoFilmName,
    GENRE: promoFilmGenre,
    DATE: promoFilmDate,
  } = promoFilmData;

  const {activeGenre, genres, films} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const onGenreClick = (genre: string) => {
    if (genre === DEFAULT_GENRE) {
      dispatch(setDefaultGenre());
    } else {
      dispatch(changeGenre(genre));
      dispatch(updateFilmList(genre));
    }
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

          <FilmsList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
