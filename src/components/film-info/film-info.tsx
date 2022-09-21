import {AuthorizationStatus} from '../../const';
import {Film} from '../../types/film';
import ButtonFavorite from '../button-favorite/button-favorite';
import ButtonPlay from '../button-play/button-play';
import ButtonReview from '../button-review/button-review';

type FilmInfoProps = {
  film: Film
  authorizationStatus: AuthorizationStatus
}

function FilmInfo({film, authorizationStatus}: FilmInfoProps): JSX.Element {
  const {
    name,
    genre,
    released,
    id,
    isFavorite
  } = film;

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">
          {genre.charAt(0).toUpperCase() + genre.slice(1)}
        </span>
        <span className="film-card__year">{released}</span>
      </p>

      <div className="film-card__buttons">
        <ButtonPlay filmId={id} />
        <ButtonFavorite
          filmId={id}
          isFavorite={isFavorite}
        />

        {authorizationStatus === AuthorizationStatus.Auth && (
          <ButtonReview filmId={id}/>
        )}
      </div>
    </div>
  );
}

export default FilmInfo;
