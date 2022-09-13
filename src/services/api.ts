import axios from 'axios';
import {BACKEND_URL, REQUEST_API_TIMEOUT} from '../const';

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_API_TIMEOUT,
  });

  return api;
};
