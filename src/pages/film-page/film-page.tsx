import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import FilmInfo from '../../components/film-info/film-info';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Tabs from '../../components/tabs/tabs';
import HeaderUser from '../../components/header-user/header-user';
import {MAX_SIMILAR_FILMS} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {resetFilm} from '../../store/action';
import {fetchFilmAction, fetchFilmCommentsAction, fetchSimilarFilmAction} from '../../store/api-actions';
import LoadingPage from '../loading-page/loading-page';


function FilmPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const {
    activeFilm,
    authorizationStatus,
    similarFilms,
    filmComments
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFilmAction(id));
    dispatch(fetchSimilarFilmAction(id));
    dispatch(fetchFilmCommentsAction(id));

    return () => {
      dispatch(resetFilm());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!activeFilm || !id) {
    return <LoadingPage />;
  }

  const {
    name,
    poster,
    backgroundPoster,
    colorPoster,
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
            <HeaderUser />
          </header>

          <div className="film-card__wrap">
            <FilmInfo
              film={activeFilm}
              authorizationStatus={authorizationStatus}
            />
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={poster} alt={`${name} poster`} width="218" height="327" />
            </div>

            <Tabs
              film={activeFilm}
              comments={filmComments}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          { similarFilms ? (
            <FilmsList films={similarFilms.slice(0, MAX_SIMILAR_FILMS)}/>
          ) : (
            <p>No similar movies were found. That&apos;s too bad.</p>
          )}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
