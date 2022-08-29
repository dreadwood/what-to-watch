import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {Film} from '../../types/films';

type MyListPageProps = {
  films: Film[]
}

function MyListPage({films}: MyListPageProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock isLogin />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {/* TODO: withot ShowMore button */}
        <FilmsList films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
