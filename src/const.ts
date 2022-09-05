export const DEFAULT_GENRE = 'all genres';

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
