import {Link, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';

function HeaderUser(): JSX.Element {
  const {pathname} = useLocation();
  const {authorizationStatus, user} = useAppSelector((store) => store);
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth && user ? (
        <>
          {pathname !== AppRoute.MyList && (
            <li className="user-block__item">
              <Link className="user-block__link" to={AppRoute.MyList}>
                My list
              </Link>
            </li>
          )}
          <li className="user-block__item">
            <button className="user-block__link" onClick={() => dispatch(logoutAction())}>
              Sign out
            </button>
          </li>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user.avatarUrl ?? 'img/avatar.jpg'} alt="User avatar" width="63" height="63" />
            </div>
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

export default HeaderUser;
