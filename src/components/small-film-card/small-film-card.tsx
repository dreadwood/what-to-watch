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
        <a className="small-film-card__link" href={`/films/${film.id}`}>
          {film.name}
        </a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
