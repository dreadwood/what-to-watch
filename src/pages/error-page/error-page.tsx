import {Link} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {AppRoute} from '../../const';

function ErrorPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Page not found</h1>
      </header>

      <div className="error">
        <h2 className="error__title">404</h2>
        <p className="error__text">
          This page you were looking for does not exist
        </p>
        <Link className="error__btn" to={AppRoute.Root}>
          Go to the main page
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default ErrorPage;
