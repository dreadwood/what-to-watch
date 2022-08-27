import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const PromoFilmData = {
  NAME: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  DATE: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promoFilmData={PromoFilmData}
    />
  </React.StrictMode>,
);
