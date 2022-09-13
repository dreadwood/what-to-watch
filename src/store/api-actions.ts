import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../const';
import {AppDispatch, State} from '../types/state';
import {loadFilms} from './action';

type ApiConfigAction = {
  dispatch: AppDispatch
  state: State
  extra: AxiosInstance
}

export const fetchFilmsAction = createAsyncThunk<void, undefined, ApiConfigAction>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(ApiRoute.Films);
      dispatch(loadFilms(data));
    } catch (error) {
      // TODO: add catch
    }
  }
);
