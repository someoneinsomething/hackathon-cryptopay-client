import { SIGNUP } from '../actions';
import { initRequestState, setRequestError, setRequestPending, setRequestSuccess } from '../utils/store';

const initialState = {
  request: initRequestState(),
  reset: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP.LOAD_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request),
      };

    case SIGNUP.LOAD_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };

    case SIGNUP.FAIL:
      return {
        ...state,
        request: setRequestError(state.request, action.message),
      };

    case SIGNUP.RESET:
      return {
        ...state,
        reset: action.reset,
      };

    default:
      return state;
  }
};
