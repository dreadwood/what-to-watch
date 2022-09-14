import {DEFAULT_GENRE} from '../const';
import {Film} from '../types/film';

export const createListGenres = (allFilms: Film[]) => [...new Set(
  allFilms.reduce((acc, film) => [...acc, film.genre], [DEFAULT_GENRE] as string[]),
)];
