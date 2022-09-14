
import {FormEvent, useRef} from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';

function SignInPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              <input className="sign-in__input"
                type="email" name="user-email" id="user-email"
                placeholder="Email address"
                ref={emailRef}
              />
            </div>
            <div className="sign-in__field">
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              <input className="sign-in__input"
                type="password" name="user-password" id="user-password"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignInPage;
