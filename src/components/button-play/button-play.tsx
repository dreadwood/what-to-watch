import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type ButtonPlayProps = {
  filmId: string
}

function ButtonPlay({filmId}: ButtonPlayProps): JSX.Element {
  return (
    <Link className="btn btn--play film-card__button"
      to={`${AppRoute.Player}/${filmId}`}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
}

export default ButtonPlay;
