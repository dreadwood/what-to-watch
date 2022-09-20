import {createAction} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus, ReviewStatus} from '../const';
import {Comments} from '../types/comment';
import {Film} from '../types/film';
import {StateUserData} from '../types/user-data';

export const changeGenre = createAction<string>('filmList/changeGenre');
// TODO: 2022-09-15 / rename
export const resetFilmList = createAction('filmList/reset');
export const addShownCards = createAction<number>('filmList/addShownCards');

export const loadFilmList = createAction<Film[]>('data/loadFilmList');
export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
export const loadFilm = createAction<Film>('data/loadFilm');
export const loadFilmComments = createAction<Comments>('data/loadFilmComments');
export const loadSimilarFilms = createAction<Film[]>('data/filmsSimilar');
export const resetFilm = createAction('data/resetFilm');
export const getListGenres = createAction<string[]>('data/getListGenres');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const loadUserData = createAction<StateUserData>('user/loadData');
export const changeReviewStatus = createAction<ReviewStatus>('user/changeReviewStatus');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
