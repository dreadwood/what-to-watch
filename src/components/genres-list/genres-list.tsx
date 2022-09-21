type GenresListProps = {
  genres: string[]
  activeGenre: string
  onGenreClick: (genre: string) => void
}

function GenresList({activeGenre, genres, onGenreClick}: GenresListProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={`catalog__genres-item${genre === activeGenre ? ' catalog__genres-item--active' : ''}`} key={genre}>
          <button className="catalog__genres-link" onClick={() => onGenreClick(genre)}>
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;

