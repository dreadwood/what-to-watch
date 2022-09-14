import {Film, FilmServer} from '../types/film';

export const adaptToClientFilm = (film: FilmServer): Film => {
  const {
    id,
    name,
    description,
    rating,
    director,
    genre,
    released,
    isFavorite
  } = film;


  return {
    id: String(id),
    name,
    poster: film.posterImage,
    smallPoster: film.previewImage,
    backgroundPoster: film.backgroundImage,
    colorPoster: film.backgroundColor,
    video: film.videoLink,
    previewVideo: film.previewVideoLink,
    director,
    cast: [...film.starring],
    released,
    duration: film.runTime,
    genre,
    description,
    rating,
    reviewsCount: film.scoresCount,
    isFavorite,
  };
};
