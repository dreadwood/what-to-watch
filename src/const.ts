export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList ='/mylist',
  // Film = '/films/:id',
  Film = '/films',
  // AddReview ='/films/:id/review',
  AddReview ='/review',
  Player ='/player/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
