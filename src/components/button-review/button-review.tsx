import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type ButtonReviewProps = {
  filmId: string
}

function ButtonReview({filmId}: ButtonReviewProps): JSX.Element {
  return (
    <Link className="btn film-card__button"
      to={`${AppRoute.Film}/${filmId}${AppRoute.AddReview}`}
    >Add review
    </Link>
  );
}

export default ButtonReview;
