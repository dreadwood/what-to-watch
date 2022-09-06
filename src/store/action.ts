import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('filmList/changeGenre');
export const resetFilmList = createAction('filmList/reset');
export const addShownCards = createAction<number>('filmList/addShownCards');
