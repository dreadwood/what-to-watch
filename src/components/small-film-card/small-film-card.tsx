import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import {Film} from '../../types/films';

type SmallFilmCardProps = {
  film: Film
  onHover: () => void
}

function SmallFilmCard({film, onHover}: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onHover}>
      <div className="small-film-card__image">
        <img src={film.smallPoster} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
