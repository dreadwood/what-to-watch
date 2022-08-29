import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type UserBlockProps = {
  isLogin?: boolean
}

function UserBlock({isLogin}: UserBlockProps): JSX.Element {
  return (
    <ul className="user-block">
      {isLogin ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.SignIn}>Sign out</Link>
          </li>
        </>
      ) : (
        <li className="user-block__item">
          <Link className="user-block__link" to={AppRoute.SignIn}>Sign in</Link>
        </li>
      )}
    </ul>
  );
}

export default UserBlock;
