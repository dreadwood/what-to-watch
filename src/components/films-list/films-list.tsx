import {useState} from 'react';
import {Film} from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmsListProps = {
  films: Film[]
}

type ActiveFilm = null | string

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<ActiveFilm>(null);
  // eslint-disable-next-line no-console
  console.log(activeFilm);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          film={film}
          key={film.id}
          onHover={() => setActiveFilm(film.id)}
        />))}
    </div>
  );
}

export default FilmsList;
