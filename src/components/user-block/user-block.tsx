import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';

function UserBlock(): JSX.Element {
  const {authorizationStatus, user} = useAppSelector((store) => store);

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user?.avatarUrl ?? 'img/avatar.jpg'} alt="User avatar" width="63" height="63" />
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
