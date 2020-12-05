import { ACCOUNT_PAYMENT_HISTORY } from '../actions';
import {
  initRequestWithDataState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
  setUpdatePending,
  setUpdateSuccess,
} from '../utils/store';

const initialState = {
  data: initRequestWithDataState(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_PAYMENT_HISTORY.LOAD_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case ACCOUNT_PAYMENT_HISTORY.LOAD_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case ACCOUNT_PAYMENT_HISTORY.LOAD_FAIL:
      return {
        ...state,
        data: setRequestError(state.data, action.message),
      };
    case ACCOUNT_PAYMENT_HISTORY.UPDATE_PENDING:
      return {
        ...state,
        data: setUpdatePending(state.data),
      };
    case ACCOUNT_PAYMENT_HISTORY.UPDATE_SUCCESS:
      return {
        ...state,
        data: setUpdateSuccess(state.data, action.data),
      };
    default:
      return state;
  }
};
