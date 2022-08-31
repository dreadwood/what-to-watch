import {Film} from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmsListProps = {
  films: Film[]
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          film={film}
          key={film.id}
        />))}
    </div>
  );
}

export default FilmsList;
