import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../const';
import {adaptToClientFilm} from '../services/adapter';
import {createListGenres} from '../services/genre';
import {FilmServer} from '../types/film';
import {AppDispatch, State} from '../types/state';
import {getListGenres, loadFilms} from './action';

type ApiConfigAction = {
  dispatch: AppDispatch
  state: State
  extra: AxiosInstance
}

export const fetchFilmsAction = createAsyncThunk<void, undefined, ApiConfigAction>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmServer[]>(ApiRoute.Films);
      const adaptData = data.map((film) => adaptToClientFilm(film));
      const genres = createListGenres(adaptData);

      dispatch(loadFilms(adaptData));
      dispatch(getListGenres(genres));
    } catch (error) {
      // TODO: add catch
    }
  }
);
