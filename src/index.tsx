import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {allComments} from './mocks/comments';
import {films} from './mocks/films';
import {store} from './store';
import {fetchFilmsAction} from './store/api-actions';

const PromoFilmData = {
  NAME: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  DATE: 2014,
};

store.dispatch(fetchFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilmData={PromoFilmData}
        films={films}
        allComments={allComments}
      />
    </Provider>
  </React.StrictMode>,
);
