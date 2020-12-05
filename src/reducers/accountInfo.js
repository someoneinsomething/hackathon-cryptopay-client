import { ACCOUNT_INFO } from '../actions';
import {
  initRequestWithDataState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
  editData,
} from '../utils/store';

const initialState = {
  data: initRequestWithDataState(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_INFO.LOAD_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case ACCOUNT_INFO.LOAD_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case ACCOUNT_INFO.LOAD_FAIL:
      return {
        ...state,
        data: setRequestError(state.data, action.message),
      };
    case ACCOUNT_INFO.SET_DATA:
      return {
        ...state,
        data: editData(state.data, (data) => ({ ...data, ...action.data })),
      };
    default:
      return state;
  }
};
