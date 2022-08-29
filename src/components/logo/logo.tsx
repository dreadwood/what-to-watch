import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type LogoProps = {
  center?: boolean
}

function Logo({center}: LogoProps): JSX.Element {
  const linkClass = `logo__link${center ? ' logo__link--light' : ''}`;

  return (
    <div className="logo">
      <Link className={linkClass} to={AppRoute.Root}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
