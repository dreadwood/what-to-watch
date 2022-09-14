import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, DEFAULT_GENRE, DEFAULT_QUANTITY_SHOWN_CARDS} from '../const';
import {Film} from '../types/film';
import {StateUserData} from '../types/user-data';
import {changeGenre, addShownCards, resetFilmList, loadFilms, getListGenres, requireAuthorization, loadUserData} from './action';

type InitialState = {
  activeGenre: string
  genres: string[]
  films: Film[]
  quantityShownCards: number
  isDataLoaded: boolean
  authorizationStatus: AuthorizationStatus
  user: StateUserData | null
}

const initialState: InitialState = {
  activeGenre: DEFAULT_GENRE,
  genres: [],
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
    .addCase(loadFilms, (state, action) => {
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
