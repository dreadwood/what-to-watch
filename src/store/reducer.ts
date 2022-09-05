import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_GENRE} from '../const';
import {films} from '../mocks/films';
import {Film} from '../types/film';
import {changeGenre, setDefaultGenre, updateFilmList} from './action';

const getListGenres = (allFilms: Film[]) => new Set(
  allFilms.reduce((acc, film) => [...acc, film.genre], [] as string[]),
);

const initialState = {
  activeGenre: DEFAULT_GENRE,
  genres: [DEFAULT_GENRE, ...getListGenres(films)],
  films,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(updateFilmList, (state, action) => {
      state.films = initialState.films.filter((film) => film.genre === action.payload);
    })
    .addCase(setDefaultGenre, () =>
      ({...initialState})
    );
});
