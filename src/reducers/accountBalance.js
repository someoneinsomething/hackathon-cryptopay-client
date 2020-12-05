import { ACCOUNT_BALANCE } from '../actions';
import {
  initRequestWithDataState,
  setRequestSuccess,
  setRequestPending,
  setRequestError,
  editData,
} from '../utils/store';

const initialState = {
  data: initRequestWithDataState(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_BALANCE.LOAD_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case ACCOUNT_BALANCE.LOAD_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case ACCOUNT_BALANCE.LOAD_FAIL:
      return {
        ...state,
        data: setRequestError(state.data, action.message),
      };
    case ACCOUNT_BALANCE.UPDATE_DATA:
      return {
        ...state,
        data: editData(state.data, (data) => ({ ...data, ...action.data })),
      };
    default:
      return state;
  }
};
