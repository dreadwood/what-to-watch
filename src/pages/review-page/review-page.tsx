import {Link, Navigate, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-block/user-block';
import {AppRoute} from '../../const';
import {Film} from '../../types/film';

type ReviewPageProps = {
  films: Film[]
}

function ReviewPage({films}: ReviewPageProps): JSX.Element {
  const {id} = useParams();
  const film = films.find((item) => (item.id === id));

  if (!film) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <section className="film-card film-card--full" style={{backgroundColor: film.colorPoster}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundPoster} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW: add review for {film.name}</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`${AppRoute.Film}/${id}`}>
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <div className="breadcrumbs__link">Add review</div>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <ReviewForm />
    </section>
  );
}

export default ReviewPage;
