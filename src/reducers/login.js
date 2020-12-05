import { LOGIN } from '../actions';
import { initRequestState, setRequestError, setRequestPending, setRequestSuccess } from '../utils/store';

const initialState = {
  reset: false,
  request: initRequestState(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.LOAD_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request, action.message),
      };

    case LOGIN.LOAD_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request, action.message),
      };

    case LOGIN.FAIL:
      return {
        ...state,
        request: setRequestError(state.request, action.message),
      };

    case LOGIN.RESET:
      return {
        ...state,
        reset: action.reset,
      };

    default:
      return state;
  }
};
