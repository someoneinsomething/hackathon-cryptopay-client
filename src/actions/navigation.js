import { NAVIGATION } from '.';
import { ROUTES } from '../constants/routes';

export const headerNavigatePath = (path, { typePath, queries } = {}) => {
  switch (path) {
    case ROUTES.LOGIN:
      typePath = 'auth';
      break;

    case ROUTES.SIGNUP:
      typePath = 'auth';
      break;

    case ROUTES.LOGOUT:
      typePath = 'auth';
      break;

    case ROUTES.RECOVERY_ACCOUNT_CONFIRM:
      typePath = 'auth';
      break;

    case ROUTES.RECOVERY_ACCOUNT_RESET:
      typePath = 'auth';
      break;

    case ROUTES.RECOVERY_ACCOUNT_UPDATE:
      typePath = 'auth';
      break;

    default:
      typePath = 'app';
  }

  if (typeof path === 'function') {
    path = path();
  }

  return (dispatch) =>
    dispatch({
      type: NAVIGATION.CHANGE_ACTIVE_PATH,
      activePath: path,
      typePath,
      queries,
    });
};

export const setNavigationQuery = (queries) => (dispatch) => {
  dispatch({ type: NAVIGATION.SET_QUERY, queries });
};

export const setPageLoading = (pageLoading) => {
  return {
    type: NAVIGATION.SET_PAGE_LOADING,
    pageLoading,
  };
};

export const setLinkBeforeAuth = (linkBeforeAuth) => {
  return {
    type: NAVIGATION.SET_LINK_BEFORE_AUTH,
    linkBeforeAuth,
  };
};
