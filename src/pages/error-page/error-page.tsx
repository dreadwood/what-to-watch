function ErrorPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Page not found</h1>
      </header>

      <div style={{
        display: 'grid',
        justifyContent: 'center',
        textAlign: 'center',
        lineHeight: '1.2',
      }} className="sign-in user-page__content"
      >
        <h2 style={{
          fontSize: '48px',
          margin: '0 0 30px 0',
        }}
        >404
        </h2>
        <p style={{
          fontSize: '26px',
          margin: '0 0 70px 0',
        }}
        >This page you were looking for does not exist
        </p>
        <a style={{
          display: 'block',
          width: '100%',
          padding: '24px 40px',
          background: '0 0',
          border: '1px solid rgba(217,205,141,.41)',
          borderRadius: '8px',
          transition: 'border-color .2s',
          fontSize: '30px',
          lineHeight: '44px',
          textAlign: 'center',
          color: '#d9cd8d',
          cursor: 'pointer',
          textDecoration: 'none',
        }} href="/"
        >Перейти на главную
        </a>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2022 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default ErrorPage;
