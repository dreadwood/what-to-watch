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
          {/* TODO: change on link */}
          <button className="catalog__genres-link"
            style={{
              margin: '0',
              padding: '0',
              paddingBottom: '15px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => onGenreClick(genre)}
          >
            {/* TODO: change on css */}
            {genre[0].toUpperCase() + genre.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;

