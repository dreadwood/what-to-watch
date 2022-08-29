import {useState} from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {AppRoute} from '../../const';
import {Film} from '../../types/films';

type AddReviewPageProps = {
  films: Film[]
}

const MAX_RAITING = 10;

function AddReviewPage({films}: AddReviewPageProps): JSX.Element {
  const {id} = useParams();
  const film = films.find((item) => (item.id === id));

  const [rating, setRating] = useState(MAX_RAITING);

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

          <UserBlock isLogin />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        {/* TODO: move to other component */}
        <form className="add-review__form" action="#">
          <div className="rating">
            <div className="rating__stars">
              {Array.from({length: MAX_RAITING}, (_, i) => {
                const value = i + 1;
                return (
                  <>
                    <input className="rating__input"
                      id={`star-${value}`}
                      type="radio"
                      name="rating"
                      value={value}
                      checked={value === rating}
                      onChange={() => setRating(value)}
                    />
                    <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
                  </>
                );
              }).reverse()}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>

        </form>
      </div>

    </section>
  );
}

export default AddReviewPage;
