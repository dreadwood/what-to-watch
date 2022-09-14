import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {BACKEND_URL, REQUEST_API_TIMEOUT} from '../const';
import {getToken} from './token';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_API_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};
