export const ROUTES = {
  HOME: '/',
  ERROR: '/error',
  NOT_FOUND: '/error-not-found',
  ACCESS_DENIED: '/error-access-denied',
  SERVER_ERROR: '/error-server',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIGNUP: '/signup',
  SETTINGS: '/account/settings',
  PAYMENT: '/account/payment',
};

export const PAGINATION_OFFSET = {
  PAYMENT_TRANSACTION: 10,
};

export const QUERIES = {
  CONFIRM_EMAIL: 'email',
  LANG: 'lang',
  LINK_BEFORE_AUTH: 'linkBeforeAuth',
  CURRENCY: 'currency',
};

export const ANCHOR_ID = {};

export const APP_MENU = [{ id: 1, tid: 'NAVIGATION.PATH.HOME', path: ROUTES.HOME }];

export const USER_LOGGED_MENU = [
  { id: 1, tid: 'NAVIGATION.PATH.SETTINGS', path: ROUTES.SETTINGS },
  { id: 2, tid: 'NAVIGATION.PATH.PAYMENT', path: ROUTES.PAYMENT },
];

export const AUTH_MENU = [
  { id: 2, tid: 'NAVIGATION.PATH.LOGIN', path: ROUTES.LOGIN },
  { id: 3, tid: 'NAVIGATION.PATH.SIGNUP', path: ROUTES.SIGNUP },
];

export const AUTH_MENU_ADDITIONAL = [{ id: 2, tid: 'NAVIGATION.PATH.HOME', path: ROUTES.HOME }];

export const USER_NO_LOGGED_MENU = [
  { id: 1, tid: 'NAVIGATION.PATH.LOGIN', path: ROUTES.LOGIN },
  { id: 2, tid: 'NAVIGATION.PATH.SIGNUP', path: ROUTES.SIGNUP },
];
