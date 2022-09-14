import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';

export const changeGenre = createAction<string>('filmList/changeGenre');
export const resetFilmList = createAction('filmList/reset');
export const addShownCards = createAction<number>('filmList/addShownCards');
export const loadFilms = createAction<Film[]>('data/loadFilms');
export const getListGenres = createAction<string[]>('data/getListGenres');
