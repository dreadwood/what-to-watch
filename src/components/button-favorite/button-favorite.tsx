import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeFavoriteStatusAction} from '../../store/api-actions';

type ButtonFavoriteProps = {
  filmId: string
  isFavorite: boolean
}

function ButtonFavorite(props: ButtonFavoriteProps): JSX.Element {
  const {
    filmId,
    isFavorite,
  } = props;

  const {promoFilm} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const buttonClickHandler = () => {
    dispatch(changeFavoriteStatusAction({
      id: filmId,
      status: Number(!isFavorite),
      isPromo: promoFilm?.id === filmId,
    }));
  };

  return (
    <button className="btn btn--list film-card__button"
      onClick={buttonClickHandler}
    >
      {isFavorite ? (
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
