import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';
import {checkAuthAction, fetchFilmListAction} from './store/api-actions';

const PromoFilmData = {
  NAME: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  DATE: 2014,
};

store.dispatch(fetchFilmListAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilmData={PromoFilmData}
      />
    </Provider>
  </React.StrictMode>
);
