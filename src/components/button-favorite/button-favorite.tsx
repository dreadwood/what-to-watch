import {useState} from 'react';

type ButtonFavoriteProps = {
  isFavorite: boolean
}

function ButtonFavorite({isFavorite}: ButtonFavoriteProps): JSX.Element {
  const [isFavoriteTest, setIsFavoriteTest] = useState(false);

  return (
    <button className="btn btn--list film-card__button"
      onClick={() => setIsFavoriteTest(!isFavoriteTest)}
    >
      {isFavoriteTest ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      )}

      <span>My list</span>
    </button>
  );
}

export default ButtonFavorite;
