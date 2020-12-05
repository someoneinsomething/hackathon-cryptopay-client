import { CURRENCY } from '../actions';
import { CURRENCY as CURRENCY_STATIC } from '../constants/static';

const initialState = {
  activeCurrency: CURRENCY_STATIC.DEFAULT,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY.UPDATE_ACTIVE_CURRENCY: {
      return {
        ...state,
        activeCurrency: action.currency,
      };
    }
    default:
      return state;
  }
};
