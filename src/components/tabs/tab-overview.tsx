import {Film} from '../../types/film';

type TabOverviewProps = {
  film: Film
}

function TabOverview({film}: TabOverviewProps):JSX.Element {
  const {
    director,
    cast,
    description,
    rating,
    reviewsount,
  } = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          {/* TODO: add change level */}
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{reviewsount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {/* TODO: add paragraph support for description? */}
        <p>{description}</p>
        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {cast.join(', ')} and other</strong>
        </p>
      </div>
    </>
  );
}

export default TabOverview;
