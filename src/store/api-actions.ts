import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ApiRoute, AuthorizationStatus} from '../const';
import {adaptToClientFilm} from '../services/adapter';
import {createListGenres} from '../services/genre';
import {saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {FilmServer} from '../types/film';
import {AppDispatch, State} from '../types/state';
import {UserData} from '../types/user-data';
import {getListGenres, loadFilms, loadUserData, requireAuthorization} from './action';

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

export const checkAuthAction = createAsyncThunk<void, undefined, ApiConfigAction>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: {token, ...userData}} = await api.get<UserData>(ApiRoute.Login);

      dispatch(loadUserData(userData));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ApiConfigAction>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(ApiRoute.Login, {email, password});

      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      // TODO: add catch
    }
  }
);
