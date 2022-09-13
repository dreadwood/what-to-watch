import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_GENRE, DEFAULT_QUANTITY_SHOWN_CARDS} from '../const';
import {films} from '../mocks/films';
import {Film} from '../types/film';
import {changeGenre, addShownCards, resetFilmList, loadFilms} from './action';

const getListGenres = (allFilms: Film[]) => new Set(
  allFilms.reduce((acc, film) => [...acc, film.genre], [] as string[]),
);

type InitialState = {
  activeGenre: string
  genres: string[]
  films: Film[]
  quantityShownCards: number
  isDataLoaded: boolean
}

const initialState: InitialState = {
  activeGenre: DEFAULT_GENRE,
  genres: [DEFAULT_GENRE, ...getListGenres(films)],
  films: [],
  quantityShownCards: DEFAULT_QUANTITY_SHOWN_CARDS,
  isDataLoaded: false,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(addShownCards, (state, action) => {
      state.quantityShownCards += action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(resetFilmList, () =>
      ({...initialState})
    );
});
