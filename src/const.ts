export const DEFAULT_GENRE = 'all genres';
export const STEP_SHOW_CARDS = 8;
export const DEFAULT_QUANTITY_SHOWN_CARDS = 8;
export const MAX_SIMILAR_FILMS = 4;

export const BACKEND_URL = 'https://11.react.htmlacademy.pro/wtw';
export const REQUEST_API_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'what-to-watch-token';

export enum Review {
  MinRaiting = 1,
  MaxRaiting = 10,
  MinTextLength = 50,
  MaxTextLength = 400,
}

export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList ='/mylist',
  Film = '/films',
  AddReview ='/review',
  Player ='/player',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ReviewStatus {
  Sending = 'SENDING',
  Rejected = 'REJECTED',
  Ready = 'READY',
}

export enum TabsType {
  Overview = '#overview',
  Details = '#details',
  Reviews = '#reviews',
}

export enum ApiRoute {
  Films = '/films',
  Comments = '/comments',
  SimilarFilm = '/similar',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  Favorite = '/favorite',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
