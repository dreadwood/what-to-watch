import {Film} from '../../types/film';

type TabOverviewProps = {
  film: Film
}

const getRating = (rating: number) => {
  switch (true) {
    case rating < 3:
      return 'Bad';
    case rating < 5:
      return 'Normal';
    case rating < 8:
      return 'Good';
    case rating < 10:
      return 'Very good';
    case rating === 10:
      return 'Awesome';
    default:
      return 'No rating';
  }
};

function TabOverview({film}: TabOverviewProps):JSX.Element {
  const {
    director,
    cast,
    description,
    rating,
    reviewsCount,
  } = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRating(rating)}</span>
          <span className="film-rating__count">{reviewsCount} ratings</span>
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
