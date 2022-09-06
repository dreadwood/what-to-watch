import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_GENRE, DEFAULT_QUANTITY_SHOWN_CARDS} from '../const';
import {films} from '../mocks/films';
import {Film} from '../types/film';
import {changeGenre, addShownCards, resetFilmList} from './action';

const getListGenres = (allFilms: Film[]) => new Set(
  allFilms.reduce((acc, film) => [...acc, film.genre], [] as string[]),
);

const initialState = {
  activeGenre: DEFAULT_GENRE,
  genres: [DEFAULT_GENRE, ...getListGenres(films)],
  films,
  quantityShownCards: DEFAULT_QUANTITY_SHOWN_CARDS,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(addShownCards, (state, action) => {
      state.quantityShownCards += action.payload;
    })
    .addCase(resetFilmList, () =>
      ({...initialState})
    );
});
