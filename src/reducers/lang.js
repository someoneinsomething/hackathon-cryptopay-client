import { LANGUAGE } from '../actions';
import { LANG } from '../constants/static';

const initialState = {
  activeLang: LANG.DEFAULT,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE.UPDATE_ACTIVE_LANG: {
      return {
        ...state,
        activeLang: String(action.lang).toUpperCase(),
      };
    }
    default:
      return state;
  }
};
