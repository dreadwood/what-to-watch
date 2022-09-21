import {useEffect} from 'react';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import HeaderUser from '../../components/header-user/header-user';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';

function MyListPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const {favoriteFilms} = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <HeaderUser />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {favoriteFilms ? (
          <FilmsList films={favoriteFilms} />
        ) : (
          <p className="catalog__text">
            Oops, no film selected. Click &quot;+My list&quot; button to add to favorites.
          </p>
        )}

      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
