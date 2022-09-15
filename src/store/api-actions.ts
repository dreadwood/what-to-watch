import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptToClientFilm} from '../services/adapter';
import {createListGenres} from '../services/genre';
import {dropToken, saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {Comments} from '../types/comment';
import {FilmServer} from '../types/film';
import {AppDispatch, State} from '../types/state';
import {UserData} from '../types/user-data';
import {getListGenres, loadFilm, loadFilmComments, loadFilmList, loadSimilarFilms, loadUserData, redirectToRoute, requireAuthorization} from './action';

type ApiConfigAction = {
  dispatch: AppDispatch
  state: State
  extra: AxiosInstance
}

export const fetchFilmListAction = createAsyncThunk<void, undefined, ApiConfigAction>(
  'data/fetchFilmList',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmServer[]>(ApiRoute.Films);
      const adaptData = data.map((film) => adaptToClientFilm(film));
      const genres = createListGenres(adaptData);

      dispatch(loadFilmList(adaptData));
      dispatch(getListGenres(genres));
    } catch (error) {
      // TODO: add error handling
    }
  }
);

export const fetchFilmAction = createAsyncThunk<void, string | undefined, ApiConfigAction>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmServer>(`${ApiRoute.Films}/${id}`);
      const adaptData = adaptToClientFilm(data);

      dispatch(loadFilm(adaptData));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      // TODO: add error handling
    }
  }
);

export const fetchFilmCommentsAction = createAsyncThunk<void, string | undefined, ApiConfigAction>(
  'data/fetchFilmComments',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Comments>(`${ApiRoute.Comments}/${id}`);

      dispatch(loadFilmComments(data));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      // TODO: add error handling
    }
  }
);

export const fetchSimilarFilmAction = createAsyncThunk<void, string | undefined, ApiConfigAction>(
  'data/fetchSimilarFilm',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmServer[]>(`${ApiRoute.Films}/${id}${ApiRoute.SimilarFilm}`);
      const adaptData = data.map((film) => adaptToClientFilm(film));

      dispatch(loadSimilarFilms(adaptData));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      // TODO: add error handling
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
      // TODO: add error handling
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ApiConfigAction>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token, ...userData}} = await api.post<UserData>(ApiRoute.Login, {email, password});

      saveToken(token);
      dispatch(loadUserData(userData));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      // TODO: add error handling
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ApiConfigAction>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(ApiRoute.Logout);

      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      // TODO: add error handling
    }
  }
);
