export const DEFAULT_GENRE = 'all genres';
export const STEP_SHOW_CARDS = 8;
export const DEFAULT_QUANTITY_SHOWN_CARDS = 8;

export const BACKEND_URL = 'https://9.react.pages.academy/wtw';
export const REQUEST_API_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'what-to-watch-token';

export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList ='/mylist',
  Film = '/films',
  AddReview ='/review',
  Player ='/player/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TabsType {
  Overview = '#overview',
  Details = '#details',
  Reviews = '#reviews',
}

export enum ApiRoute {
  Films = '/films',
}
