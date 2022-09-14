import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';

function UserBlock(): JSX.Element {
  // TODO: 2022-09-14 / fix update avatar after load userData
  const {authorizationStatus, user} = useAppSelector((store) => store);
  const dispatch = useAppDispatch();

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
            <button className="user-block__link"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                padding: '0',
                margin: '0',
              }}
              onClick={() => dispatch(logoutAction())}
            >
              Sign out
            </button>
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

//logoutAction
