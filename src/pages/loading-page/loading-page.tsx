import ClipLoader from 'react-spinners/BarLoader';

// TODO: 2022-09-14 / create common message page for loading and error
function LoadingPage(): JSX.Element {
  return (
    <div className="user-page">
      <div className="user-page__content"
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignContent: 'center',
          fontSize: '26px',
          lineHeight: '1.4',
          textAlign: 'center',
        }}
      >
        <p>Loading...</p>
        <ClipLoader color={'#c9b37e'} cssOverride={{width: '100%'}}/>
      </div>
    </div>
  );
}

export default LoadingPage;
