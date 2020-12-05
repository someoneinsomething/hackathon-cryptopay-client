import { ACCOUNT_PAYMENT_ADDRESS } from '../actions';
import { initRequestWithDataState, setRequestError, setRequestPending, setRequestSuccess } from '../utils/store';

const initialState = {
  data: initRequestWithDataState(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_PAYMENT_ADDRESS.LOAD_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };

    case ACCOUNT_PAYMENT_ADDRESS.LOAD_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };

    case ACCOUNT_PAYMENT_ADDRESS.LOAD_FAIL:
      return {
        ...state,
        data: setRequestError(state.data, action.message),
      };

    case ACCOUNT_PAYMENT_ADDRESS.UPDATE_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };

    case ACCOUNT_PAYMENT_ADDRESS.UPDATE_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };

    default:
      return state;
  }
};
