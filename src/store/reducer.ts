import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, DEFAULT_GENRE, DEFAULT_QUANTITY_SHOWN_CARDS} from '../const';
import {Film} from '../types/film';
import {Comments} from '../types/comment';
import {StateUserData} from '../types/user-data';
import {changeGenre, addShownCards, resetFilmList, loadFilmList, getListGenres, requireAuthorization, loadUserData, loadFilm, resetFilm, loadSimilarFilms, loadFilmComments} from './action';

type InitialState = {
  activeGenre: string
  genres: string[]
  activeFilm: Film | null
  filmComments: Comments
  similarFilms: Film[]
  films: Film[]
  quantityShownCards: number
  isDataLoaded: boolean
  authorizationStatus: AuthorizationStatus
  user: StateUserData | null
}

const initialState: InitialState = {
  activeGenre: DEFAULT_GENRE,
  genres: [],
  activeFilm: null,
  filmComments: [],
  similarFilms: [],
  films: [],
  quantityShownCards: DEFAULT_QUANTITY_SHOWN_CARDS,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(addShownCards, (state, action) => {
      state.quantityShownCards += action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.activeFilm = action.payload;
    })
    .addCase(loadFilmComments, (state, action) => {
      state.filmComments = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(resetFilm, (state) => {
      state.activeFilm = initialState.activeFilm;
      state.filmComments = initialState.filmComments;
      state.similarFilms = initialState.similarFilms;
    })
    .addCase(loadFilmList, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(getListGenres, (state, action) => {
      state.genres = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.user = action.payload;
    })
    .addCase(resetFilmList, (state) => {
      state.activeGenre = initialState.activeGenre;
      state.quantityShownCards = initialState.quantityShownCards;
    });
});
