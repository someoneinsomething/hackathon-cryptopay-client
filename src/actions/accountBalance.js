import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { ACCOUNT_BALANCE } from './index';
import { performAccountBalance } from '../api/account';

const setFail = (message) => ({
  type: ACCOUNT_BALANCE.LOAD_FAIL,
  message,
});

const setLoaded = (data) => ({
  type: ACCOUNT_BALANCE.LOAD_SUCCESS,
  data: performAccountBalance(data),
});

const setLoading = () => ({
  type: ACCOUNT_BALANCE.LOAD_PENDING,
});

const setUpdate = (data) => ({
  type: ACCOUNT_BALANCE.UPDATE_DATA,
  data: performAccountBalance(data),
});

export const getAccountBalance = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await httpRequest.get(API.ACCOUNT_BALANCE);
      dispatch(setLoaded(response.data));
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};

export const updateAccountBalance = () => {
  return async (dispatch) => {
    try {
      const response = await httpRequest.get(API.ACCOUNT_BALANCE);
      dispatch(setUpdate(response.data));
    } catch {}
  };
};
