import {Link, Navigate, useParams} from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Tabs from '../../components/tabs/tabs';
import UserBlock from '../../components/user-block/user-block';
import {AppRoute} from '../../const';
import {Film} from '../../types/films';

type FilmPageProps = {
  films: Film[]
}

const MAX_SIMILAR_FILMS = 4;

function FilmPage({films}: FilmPageProps): JSX.Element {
  const {id} = useParams();

  const activeFilm = films.find((item) => (item.id === id));
  const similarFilms = films.slice(0, MAX_SIMILAR_FILMS);

  if (!activeFilm) {
    return <Navigate to={AppRoute.Root} />;
  }

  const {
    name,
    poster,
    backgroundPoster,
    colorPoster,
    released,
    genre,
    isFavorite,
  } = activeFilm;

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: colorPoster}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundPoster} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW: {name}</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button"
                  type="button"
                >
                  {isFavorite ? (
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  )}
                  <span>My list</span>
                </button>
                <Link className="btn film-card__button" to={`${AppRoute.Film}/${id}${AppRoute.AddReview}`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={poster} alt={`${name} poster`} width="218" height="327" />
            </div>

            <Tabs film={activeFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {/* TODO: only 4 films, withot ShowMore button */}
          <FilmsList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
