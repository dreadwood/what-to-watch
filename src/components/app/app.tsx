import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  promoFilmData: {
    NAME: string,
    GENRE: string,
    DATE: number,
  }
}

function App({promoFilmData}: AppProps): JSX.Element {
  return (
    <MainPage
      filmName={promoFilmData.NAME}
      filmGenre={promoFilmData.GENRE}
      filmDate={promoFilmData.DATE}
    />
  );
}

export default App;
