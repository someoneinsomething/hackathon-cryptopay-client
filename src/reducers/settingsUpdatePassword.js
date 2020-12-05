import { SETTINGS_UPDATE_PASSWORD } from '../actions';
import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
  resetRequestStatus,
} from '../utils/store';

const initialState = {
  request: initRequestState(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS_UPDATE_PASSWORD.UPDATE_SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request),
      };

    case SETTINGS_UPDATE_PASSWORD.UPDATE_PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };

    case SETTINGS_UPDATE_PASSWORD.UPDATE_FAIL:
      return {
        ...state,
        request: setRequestError(state.request, action.message),
      };
    case SETTINGS_UPDATE_PASSWORD.RESET_STATUS:
      return {
        ...state,
        request: resetRequestStatus(state.request),
      };
    default:
      return state;
  }
};
