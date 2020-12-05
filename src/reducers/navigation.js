import { NAVIGATION } from '../actions';

const initialState = {
  activePath: null,
  typePath: null,
  pageLoading: true,
  linkBeforeAuth: null,
  queries: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION.CHANGE_ACTIVE_PATH:
      return {
        ...state,
        activePath: action.activePath,
        typePath: action.typePath,
        queries: { ...state.queries, ...action.queries },
      };
    case NAVIGATION.SET_PAGE_LOADING:
      return {
        ...state,
        pageLoading: action.pageLoading,
      };
    case NAVIGATION.SET_QUERY: {
      return {
        ...state,
        queries: { ...state.queries, ...action.queries },
      };
    }
    case NAVIGATION.SET_LINK_BEFORE_AUTH: {
      return {
        ...state,
        linkBeforeAuth: action.linkBeforeAuth,
      };
    }
    default:
      return state;
  }
};
