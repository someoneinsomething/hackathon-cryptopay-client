import { CAPTCHA } from '../actions';
import { initRequestWithDataState, setRequestError, setRequestPending, setRequestSuccess } from '../utils/store';

const initialState = {
  data: initRequestWithDataState(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CAPTCHA.LOAD_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };

    case CAPTCHA.LOAD_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };

    case CAPTCHA.LOAD_FAIL:
      return {
        ...state,
        data: setRequestError(state.data, action.message),
      };

    default:
      return state;
  }
};
