import {createAction} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus} from '../const';
import {Film} from '../types/film';
import {StateUserData} from '../types/user-data';

export const changeGenre = createAction<string>('filmList/changeGenre');
export const resetFilmList = createAction('filmList/reset');
export const addShownCards = createAction<number>('filmList/addShownCards');
export const loadFilms = createAction<Film[]>('data/loadFilms');
export const getListGenres = createAction<string[]>('data/getListGenres');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const loadUserData = createAction<StateUserData>('user/loadData');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
