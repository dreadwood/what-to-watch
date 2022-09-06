export const DEFAULT_GENRE = 'all genres';
export const STEP_SHOW_CARDS = 8;
export const DEFAULT_QUANTITY_SHOWN_CARDS = 8;

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
