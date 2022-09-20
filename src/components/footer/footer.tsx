import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer" style={{marginTop: 'auto'}}>
      <Logo center />

      <div className="copyright">
        <p>© 2022 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
