import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('filter/changeGenre');
export const updateFilmList = createAction<string>('filter/updateFilmList');
export const setDefaultGenre = createAction('filter/setDefaultGenre');
